import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';
import * as jwtDecode from 'jwt-decode';
import * as moment from 'moment';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentloginurl = "https://pair-app-v1.herokuapp.com/auth/jwt/token/";
  private refreshtokenurl = "https://pair-app-v1.herokuapp.com/api/token/refresh/";

  constructor(private http: HttpClient) { }

  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  
  private setSession(authResult) {
    const token = authResult.access;
    const payload = <JWTPayload> jwtDecode(token);
    const expiresAt = moment.unix(payload.exp);
    // if (payload.role == "student"){
    //   console.log("PAYLOAD")
    //   console.log(payload)
    //   localStorage.setItem('token', authResult.access);
    //   localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
    // }
    console.log("PAYLOAD")
    console.log(payload)
    console.log("Token")
    console.log(token)
    console.log("Before SetItem")
    localStorage.setItem('token', token);
    console.log("After SetItem")
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  get token(): string {
    return localStorage.getItem('token');
  }

  studentLogin(email: string, password: string) {
    return this.http.post(
      this.studentloginurl,
      { email, password }
    ).pipe(
      tap(response => this.setSession(response)),
      shareReplay(),
    );
  }

  studentLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expires_at');
    
  }

  refreshToken() {
    if (moment().isBetween(this.getExpiration().subtract(1, 'days'), this.getExpiration())) {
      return this.http.post(
        this.refreshtokenurl,
        { refresh: this.token }
      ).pipe(
        tap(response => this.setSession(response)),
        shareReplay(),
      ).subscribe();
    }
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);

    return moment(expiresAt);
  }

  studentLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  studentLoggedOut() {
    return !this.studentLoggedIn();
  }

}


@Injectable()
export class StudentAuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    if (token) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', 'Bearer '.concat(token))
      });

      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}

@Injectable()
export class StudentAuthGuard implements CanActivate {

  constructor(private studentService: StudentService, private router: Router) { }

  canActivate() {
    if (this.studentService.studentLoggedIn()) {
      // this.adminService.refreshToken();

      return true;
    } else {
      this.studentService.studentLogout();
      this.router.navigate(['/login']);
      // this.router.navigate(['login']);
      
      return false;
    }
  }
}

interface JWTPayload {
  user_id: number;
  email: string;
  exp: number;
  role: string;
  token_type: string;
  jti: string;
  bio: string;
  phone: string;
}
