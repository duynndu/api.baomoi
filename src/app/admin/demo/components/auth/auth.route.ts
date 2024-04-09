import { Routes } from '@angular/router'

export default [
    { path: 'error', loadChildren: () => import('./error/error.route') },
    { path: 'access', loadChildren: () => import('./access/access.route') },
    { path: 'login', loadChildren: () => import('./login/login.route') },
    { path: '**', redirectTo: '/notfound' },
] as Routes
