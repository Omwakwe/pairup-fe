import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';
import * as jwtDecode from 'jwt-decode';
import * as moment from 'moment';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class AdminService {

  private adminloginurl = "https://pair-app-v1.herokuapp.com/auth/jwt/token/";

  constructor(private http: HttpClient) { }

  private setSession(authResult) {
    const token = authResult.token;
    const payload = <JWTPayload> jwtDecode(token);
    const expiresAt = moment.unix(payload.exp);
    // if payload.role == "admin"
    localStorage.setItem('token', authResult.token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  get token(): string {
    return localStorage.getItem('token');
  }

  adminLogin(email: string, password: string) {
    return this.http.post(
      this.adminloginurl,
      { email, password }
    ).pipe(
      tap(response => this.setSession(response)),
      shareReplay(),
    );
  }

  adminLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expires_at');
  }

  refreshToken() {
    if (moment().isBetween(this.getExpiration().subtract(1, 'days'), this.getExpiration())) {
      return this.http.post(
        this.adminloginurl.concat('refresh-token/'),
        { token: this.token }
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

  adminLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  adminLoggedOut() {
    return !this.adminLoggedIn();
  }
}

@Injectable()
export class AdminAuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    if (token) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', 'JWT '.concat(token))
      });

      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private adminService: AdminService, private router: Router) { }

  canActivate() {
    if (this.adminService.adminLoggedIn()) {
      this.adminService.refreshToken();

      return true;
    } else {
      this.adminService.adminLogout();
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
  token_type: string
  jti: any;
  bio: string;
  phone: string;
}