import { Component } from '@angular/core'
import { PasswordModule } from 'primeng/password'
import { FormsModule, NgForm } from '@angular/forms'
import { ChipsModule } from 'primeng/chips'
import { Router, RouterLink } from '@angular/router'
import { ButtonModule } from 'primeng/button'
import { RippleModule } from 'primeng/ripple'
import { CheckboxModule } from 'primeng/checkbox'
import { LayoutService } from '../../layout/service/app.layout.service'
import { AuthService } from '../../../Services/auth.service'
import { MessageService } from 'primeng/api'

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [PasswordModule, FormsModule, ChipsModule, RouterLink, ButtonModule, RippleModule, CheckboxModule],
    templateUrl: './login.component.html',
    styles: [
        `
            :host ::ng-deep .pi-eye,
            :host ::ng-deep .pi-eye-slash {
                transform: scale(1.6);
                margin-right: 1rem;
                color: var(--primary-color) !important;
            }
            img {
                display: inline;
                width: unset;
            }
        `,
    ],
    providers: [MessageService],
})
export class LoginComponent {
    valCheck: string[] = ['remember']

    email!: string
    password!: string

    constructor(
        public layoutService: LayoutService,
        private authService: AuthService,
        private router: Router,
        private messageService: MessageService,
    ) {}

    onSubmit(formGroup: NgForm) {
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Post Deleted', life: 3000 })
        this.authService.login(formGroup.value).subscribe(
            (res: any) => {
                if (res.token) {
                    console.log(res)
                    localStorage.setItem('token', res.token)
                    this.router.navigate(['/admin'])
                    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Login Successfully', life: 3000 })
                }
            },
            (error) => {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Login Failed', life: 3000 })
                console.log(error)
            },
        )
    }
}
