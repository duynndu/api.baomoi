import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute, RouterLink } from '@angular/router'
import { CommonModule } from '@angular/common'
import { PostService } from '../../../Services/post.service'
import { FooterComponent } from '../../components/footer/footer.component'
import { HeaderComponent } from '../../components/header/header.component'
import { SidebarClientComponent } from '../../components/sidebar-client/sidebar-client.component'

@Component({
    selector: 'app-post-by-category',
    standalone: true,
    imports: [CommonModule, SidebarClientComponent, RouterLink, FooterComponent, HeaderComponent],
    templateUrl: './post-by-category.component.html',
    styleUrl: './post-by-category.component.scss',
})
export class PostByCategoryComponent implements OnInit {
    categoryName: string
    postResult: any

    constructor(
        private route: ActivatedRoute,
        private postService: PostService,
    ) {
        this.route.params.subscribe((params) => {
            this.postService.getPostByCategory(params['slug']).subscribe((posts) => {
                this.postResult = posts
            })
            this.categoryName = params['slug']
        })
    }

    ngOnInit() {}
}
