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

export class AdminService {
  private baseurl = "https://pair-app-v1.herokuapp.com";
  private adminloginurl = "https://pair-app-v1.herokuapp.com/auth/jwt/token/";
  private cohorturl = "https://pair-app-v1.herokuapp.com/cohorts/";
  private refreshtokenurl = "https://pair-app-v1.herokuapp.com/api/token/refresh/";
  private mentorurl = "https://pair-app-v1.herokuapp.com/mentors/";
  private studenturl = "https://pair-app-v1.herokuapp.com/students/";
  
  constructor(private http: HttpClient) { }

  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  
  private setSession(authResult) {
    const token = authResult.access;
    const payload = <JWTPayload> jwtDecode(token);
    const expiresAt = moment.unix(payload.exp);
    if (payload.role == "admin"){
      console.log("PAYLOAD")
      console.log(payload)
      localStorage.setItem('token', authResult.access);
      localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
    }
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

  adminLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  adminLoggedOut() {
    return !this.adminLoggedIn();
  }

  getAllCohorts(): Observable<any>{
    return this.http.get(this.cohorturl,
    {headers: this.httpHeaders})
  }

  getAllStudents(): Observable<any>{
    return this.http.get(this.baseurl + '/students/',
    {headers: this.httpHeaders})
  }

  getAllMentors(): Observable<any>{
    return this.http.get(this.baseurl + '/mentors/',
    {headers: this.httpHeaders})
  }
  
  RegisterMentor(mentor): Observable<any>{
    return this.http.post<any>(this.mentorurl, mentor, {headers: this.httpHeaders});
  }

  RegisterCohort(cohort): Observable<any>{
    return this.http.post<any>(this.cohorturl, cohort, {headers: this.httpHeaders});
  }

  RegisterStudent(student): Observable<any>{
    return this.http.post<any>(this.studenturl, student, {headers: this.httpHeaders});
  }
}

@Injectable()
export class AdminAuthInterceptor implements HttpInterceptor {

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
export class AdminAuthGuard implements CanActivate {

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
  token_type: string;
  jti: string;
  bio: string;
  phone: string;
}