import { Component, OnInit } from '@angular/core'
import { PrimeNGConfig } from 'primeng/api'
import { Router, RouterOutlet } from '@angular/router'

@Component({
    selector: 'app-admin',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: `./admin.component.html`,
    styleUrl: './admin.component.scss',
})
export class AdminComponent implements OnInit {
    constructor(
        private primengConfig: PrimeNGConfig,
        private router: Router,
    ) {}

    ngOnInit() {
        this.primengConfig.ripple = true
    }
}
