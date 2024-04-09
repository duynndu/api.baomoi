import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Observable } from 'rxjs'
import { PostService } from '../../../Services/post.service'
import { CategoryService } from '../../../Services/category.service'
import { RouterModule } from '@angular/router'

@Component({
    selector: 'app-sidebar-client',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './sidebar-client.component.html',
    styleUrl: './sidebar-client.component.scss',
})
export class SidebarClientComponent {
    popularPosts: Observable<any>
    trendingPosts: Observable<any>
    posts: Observable<any>
    categories: Observable<any>
    constructor(
        private postService: PostService,
        private categoryService: CategoryService,
    ) {}

    ngOnInit() {
        this.trendingPosts = this.postService.getTrendingPost(10)
        this.popularPosts = this.postService.getPopularPosts(10)
        this.posts = this.postService.getPosts(10)

        this.categories = this.categoryService.getCategories()
    }
    ngOnDestroy() {}
}
