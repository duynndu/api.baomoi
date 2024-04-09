import { Component, OnDestroy, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CommentComponent } from '../../components/comment/comment.component'
import { ActivatedRoute } from '@angular/router'
import { PostService } from '../../../Services/post.service'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { HeaderComponent } from '../../components/header/header.component'
import { FooterComponent } from '../../components/footer/footer.component'
import { SidebarClientComponent } from '../../components/sidebar-client/sidebar-client.component'

@Component({
    selector: 'app-single-post',
    standalone: true,
    imports: [CommonModule, CommentComponent, SidebarClientComponent, HeaderComponent, FooterComponent],
    templateUrl: './single-post.component.html',
    styleUrl: './single-post.component.css',
})
export class SinglePostComponent implements OnInit, OnDestroy {
    post: any
    id: number

    constructor(
        private route: ActivatedRoute,
        private postService: PostService,
    ) {
        this.route.params.pipe(takeUntilDestroyed()).subscribe((params) => {
            this.postService.getPost(params['slug']).subscribe((post) => {
                this.post = post
                this.id = post['id']
            })
        })
    }

    ngOnInit() {}

    ngOnDestroy() {}
}
