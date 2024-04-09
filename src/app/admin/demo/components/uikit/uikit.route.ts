import { Routes } from '@angular/router'

export default [
    { path: 'button', data: { breadcrumb: 'Button' }, loadChildren: () => import('./button/buttondemo.route') },
    { path: 'charts', data: { breadcrumb: 'Charts' }, loadChildren: () => import('./charts/chartsdemo.route') },
    { path: 'file', data: { breadcrumb: 'File' }, loadChildren: () => import('./file/filedemo.route') },
    {
        path: 'floatlabel',
        data: { breadcrumb: 'Float Label' },
        loadChildren: () => import('./floatlabel/floatlabeldemo.route'),
    },
    {
        path: 'formlayout',
        data: { breadcrumb: 'Form Layout' },
        loadChildren: () => import('./formlayout/formlayoutdemo.route'),
    },
    { path: 'input', data: { breadcrumb: 'Input' }, loadChildren: () => import('./input/inputdemo.route') },
    {
        path: 'invalidstate',
        data: { breadcrumb: 'Invalid State' },
        loadChildren: () => import('./invalid/invalidstatedemo.route'),
    },
    { path: 'list', data: { breadcrumb: 'List' }, loadChildren: () => import('./list/listdemo.route') },
    { path: 'media', data: { breadcrumb: 'Media' }, loadChildren: () => import('./media/mediademo.route') },
    { path: 'message', data: { breadcrumb: 'Message' }, loadChildren: () => import('./messages/messagesdemo.route') },
    { path: 'misc', data: { breadcrumb: 'Misc' }, loadChildren: () => import('./misc/miscdemo.route') },
    { path: 'overlay', data: { breadcrumb: 'Overlay' }, loadChildren: () => import('./overlays/overlaysdemo.route') },
    { path: 'panel', data: { breadcrumb: 'Panel' }, loadChildren: () => import('./panels/panelsdemo.route') },
    { path: 'table', data: { breadcrumb: 'Table' }, loadChildren: () => import('./table/tabledemo.route') },
    { path: 'tree', data: { breadcrumb: 'Tree' }, loadChildren: () => import('./tree/treedemo.route') },
    { path: 'menu', data: { breadcrumb: 'Menu' }, loadChildren: () => import('./menus/menus.route') },
    { path: '**', redirectTo: '/notfound' },
] as Routes
