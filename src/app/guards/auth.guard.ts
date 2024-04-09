import { CanActivateFn, Router } from '@angular/router'
import { Observable } from 'rxjs'
import { AuthService } from '../Services/auth.service'
import { inject } from '@angular/core'

export const authGuard: CanActivateFn = () => {
    const authService: AuthService = inject(AuthService)
    const router: Router = inject(Router)
    if (!authService.isAuthenticated()) {
        router.navigate(['login'])
        console.log('chưu đăng nhập')
        return false
    }
    console.log('đã đăng nhập')
    return true
}
