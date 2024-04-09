import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { HeaderComponent } from './components/header/header.component'
import { CommonModule } from '@angular/common'

@Component({
    selector: 'app-client',
    standalone: true,
    imports: [CommonModule, RouterModule, HeaderComponent],
    templateUrl: './client.component.html',
    styleUrl: './client.component.scss',
})
export class ClientComponent {}
