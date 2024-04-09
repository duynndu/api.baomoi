import { Routes } from '@angular/router'
import { DashboardComponent } from './dashboard.component'
import { CategoriesComponent } from '../categories/categories.component'
import { PostsComponent } from '../posts/posts.component'
import { UsersComponent } from '../users/users.component'
import { CommentsComponent } from '../comments/comments.component'
import { ImagesComponent } from '../images/images.component'

export default [
    { path: '', component: DashboardComponent },
    { path: 'posts', component: PostsComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'users', component: UsersComponent },
    { path: 'comments', component: CommentsComponent },
    { path: 'images', component: ImagesComponent },
] as Routes
