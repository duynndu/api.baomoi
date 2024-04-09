import { Component } from '@angular/core'
import { LayoutService } from '../../../../layout/service/app.layout.service'
import { PasswordModule } from 'primeng/password'
import { FormsModule } from '@angular/forms'
import { ChipsModule } from 'primeng/chips'
import { RouterLink } from '@angular/router'
import { ButtonModule } from 'primeng/button'
import { RippleModule } from 'primeng/ripple'
import { CheckboxModule } from 'primeng/checkbox'

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
})
export class LoginComponent {
    valCheck: string[] = ['remember']

    password!: string

    constructor(public layoutService: LayoutService) {}
}
