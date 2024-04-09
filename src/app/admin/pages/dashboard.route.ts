import { DashboardComponent } from './dashboard/dashboard.component'
import { PostsComponent } from './posts/posts.component'
import { CategoriesComponent } from './categories/categories.component'
import { UsersComponent } from './users/users.component'
import { CommentsComponent } from './comments/comments.component'
import { ImagesComponent } from './images/images.component'
import { Routes } from '@angular/router'

export default [
    { path: '', component: DashboardComponent },
    { path: 'posts', component: PostsComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'users', component: UsersComponent },
    { path: 'comments', component: CommentsComponent },
    { path: 'images', component: ImagesComponent },
] as Routes
