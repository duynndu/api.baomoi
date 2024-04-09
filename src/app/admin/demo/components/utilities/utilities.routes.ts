import { Routes } from '@angular/router'
import { IconsComponent } from './icons/icons.component';

export default [
    { path: 'icons', data: { breadcrumb: 'Prime Icons' }, component: IconsComponent },
    { path: '**', redirectTo: '/notfound' }
] as Routes
