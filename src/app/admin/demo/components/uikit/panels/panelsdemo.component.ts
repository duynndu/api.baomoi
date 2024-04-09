import { Component, OnInit } from '@angular/core'
import { MenuItem } from 'primeng/api'
import { ToolbarModule } from 'primeng/toolbar'
import { ButtonModule } from 'primeng/button'
import { SplitButtonModule } from 'primeng/splitbutton'
import { AccordionModule } from 'primeng/accordion'
import { TabViewModule } from 'primeng/tabview'
import { MenuModule } from 'primeng/menu'
import { ChipsModule } from 'primeng/chips'
import { DividerModule } from 'primeng/divider'
import { SplitterModule } from 'primeng/splitter'
import { FieldsetModule } from 'primeng/fieldset'
import { PanelModule } from 'primeng/panel'

@Component({
    standalone: true,
    templateUrl: './panelsdemo.component.html',
    imports: [
        ToolbarModule,
        ButtonModule,
        SplitButtonModule,
        AccordionModule,
        TabViewModule,
        MenuModule,
        ChipsModule,
        DividerModule,
        SplitterModule,
        FieldsetModule,
        PanelModule,
    ],
})
export class PanelsDemoComponent implements OnInit {
    items: MenuItem[] = []

    cardMenu: MenuItem[] = []

    ngOnInit() {
        this.items = [
            { label: 'Angular.io', icon: 'pi pi-external-link', url: 'http://angular.io' },
            { label: 'Theming', icon: 'pi pi-bookmark', routerLink: ['/theming'] },
        ]

        this.cardMenu = [
            {
                label: 'Save',
                icon: 'pi pi-fw pi-check',
            },
            {
                label: 'Update',
                icon: 'pi pi-fw pi-refresh',
            },
            {
                label: 'Delete',
                icon: 'pi pi-fw pi-trash',
            },
        ]
    }
}
