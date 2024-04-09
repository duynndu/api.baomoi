import { Injectable } from '@angular/core'
import { JwtHelperService } from '@auth0/angular-jwt'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { Router } from '@angular/router'

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    api = environment.api
    constructor(
        private httpClient: HttpClient,
        private jwtHelper: JwtHelperService,
        private router: Router,
    ) {}

    public isAuthenticated(): boolean {
        const token = localStorage.getItem('token')
        return !this.jwtHelper.isTokenExpired(token)
    }

    public login(data: any) {
        return this.httpClient.post(this.api + 'auth/login', data)
    }
}
