import { Component, OnInit } from '@angular/core'
import { PrimeNGConfig } from 'primeng/api'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [ReactiveFormsModule, RouterModule, CommonModule],
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    constructor(private primengConfig: PrimeNGConfig) {}

    ngOnInit() {
        this.primengConfig.ripple = true
    }
}
