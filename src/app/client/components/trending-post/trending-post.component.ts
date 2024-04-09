import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { CommonModule } from '@angular/common'
import { RouterLink } from '@angular/router'
import { PostService } from '../../../Services/post.service'

@Component({
    selector: 'app-trending-post',
    templateUrl: './trending-post.component.html',
    standalone: true,
    imports: [CommonModule, RouterLink],
    styleUrl: './trending-post.component.css',
})
export class TrendingPostComponent implements OnInit {
    trendingPosts: Observable<any>
    constructor(private postService: PostService) {
        this.trendingPosts = this.postService.getTrendingPost(6)
    }

    ngOnInit() {}
}
