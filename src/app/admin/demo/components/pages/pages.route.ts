import { Routes } from '@angular/router'

export default [
    { path: 'crud', loadChildren: () => import('./crud/crud.route') },
    { path: 'empty', loadChildren: () => import('./empty/emptydemo.route') },
    { path: 'timeline', loadChildren: () => import('./timeline/timelinedemo.route') },
    { path: '**', redirectTo: '/notfound' },
] as Routes
