import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { LayoutService } from '../../../layout/service/app.layout.service'
import { StyleClassModule } from 'primeng/styleclass'
import { RippleModule } from 'primeng/ripple'
import { ButtonModule } from 'primeng/button'
import { DividerModule } from 'primeng/divider'

@Component({
    selector: 'app-landing',
    standalone: true,
    templateUrl: './landing.component.html',
    imports: [StyleClassModule, RippleModule, ButtonModule, DividerModule],
})
export class LandingComponent {
    constructor(
        public layoutService: LayoutService,
        public router: Router,
    ) {}
}
