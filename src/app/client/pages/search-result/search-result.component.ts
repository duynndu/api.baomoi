import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, RouterLink } from '@angular/router'
import { Observable } from 'rxjs'
import { PostService } from '../../../Services/post.service'
import { HeaderComponent } from '../../components/header/header.component'
import { FooterComponent } from '../../components/footer/footer.component'
import { SidebarClientComponent } from '../../components/sidebar-client/sidebar-client.component'
import { AsyncPipe, DatePipe, NgForOf } from '@angular/common'

@Component({
    selector: 'app-search-result',
    standalone: true,
    imports: [SidebarClientComponent, HeaderComponent, FooterComponent, RouterLink, AsyncPipe, DatePipe, NgForOf],
    templateUrl: './search-result.component.html',
    styleUrl: './search-result.component.scss',
})
export class SearchResultComponent implements OnInit, OnDestroy {
    postResult: Observable<any>
    constructor(
        private postService: PostService,
        private route: ActivatedRoute,
    ) {}
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.postResult = this.postService.getPostByKeyword(params['keyword'])
        })
    }
    ngOnDestroy() {}
}
