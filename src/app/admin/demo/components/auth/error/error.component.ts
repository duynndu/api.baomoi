import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { ButtonModule } from 'primeng/button'
import { RippleModule } from 'primeng/ripple'

@Component({
    selector: 'app-error',
    standalone: true,
    imports: [RouterLink, ButtonModule, RippleModule],
    templateUrl: './error.component.html',
})
export class ErrorComponent {}
