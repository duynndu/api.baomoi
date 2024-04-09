import { Component, ElementRef, ViewChild } from '@angular/core'
import { MenuItem } from 'primeng/api'
import { LayoutService } from './service/app.layout.service'
import { RouterLink } from '@angular/router'
import { NgClass } from '@angular/common'

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [RouterLink, NgClass],
    templateUrl: './app.topbar.component.html',
})
export class AppTopBarComponent {
    items!: MenuItem[]

    @ViewChild('menubutton') menuButton!: ElementRef

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef

    @ViewChild('topbarmenu') menu!: ElementRef

    constructor(public layoutService: LayoutService) {}
}
