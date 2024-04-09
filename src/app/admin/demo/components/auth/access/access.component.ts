import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'
import { ButtonModule } from 'primeng/button'
import { RippleModule } from 'primeng/ripple'

@Component({
    selector: 'app-access',
    standalone: true,
    imports: [RouterLink, ButtonModule, RippleModule],
    templateUrl: './access.component.html',
})
export class AccessComponent {}
