import { Routes } from '@angular/router'
import { AdminComponent } from './admin/admin.component'
import { HomeComponent } from './client/pages/home/home.component'
import { SinglePostComponent } from './client/pages/single-post/single-post.component'
import { SearchResultComponent } from './client/pages/search-result/search-result.component'
import { PostByCategoryComponent } from './client/pages/post-by-category/post-by-category.component'
import { NotfoundComponent } from './admin/demo/components/notfound/notfound.component'
import { LoginComponent } from './admin/pages/login/login.component'
import { authGuard } from './guards/auth.guard'

export const APP_ROUTE: Routes = [
    { path: '', component: HomeComponent },
    { path: 'singlePost/:slug', component: SinglePostComponent },
    { path: 'search/:keyword', component: SearchResultComponent },
    { path: 'category/:slug', component: PostByCategoryComponent },
    {
        path: 'admin',
        component: AdminComponent,
        loadChildren: () => import('./admin/admin.route'),
        canActivate: [authGuard],
    },
    { path: 'login', component: LoginComponent },
    { path: 'notfound', component: NotfoundComponent },
    { path: '**', redirectTo: '/notfound' },
]
