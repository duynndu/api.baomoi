import { Routes } from '@angular/router'
import { AppLayoutComponent } from './layout/app.layout.component'

export default [
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            { path: '', loadChildren: () => import('./pages/dashboard/dashboard.route') },
            { path: 'dashboard', loadChildren: () => import('./demo/components/dashboard/dashboard.route') },
            { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.route') },
            { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.routes') },
            {
                path: 'documentation',
                loadChildren: () => import('./demo/components/documentation/documentation.route'),
            },
            { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.route') },
            { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.route') },
        ],
    },
    {
        path: 'landing',
        loadChildren: () => import('./demo/components/landing/landing.route'),
    },
    {
        path: 'auth',
        loadChildren: () => import('./demo/components/auth/auth.route'),
    },
    { path: '**', redirectTo: '/notfound' },
] as Routes
