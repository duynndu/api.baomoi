import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {TrendingPostComponent} from "../../components/trending-post/trending-post.component";
import {ChunkArrayPipe} from "../../../pipes/chunk-array.pipe";
import {HeaderComponent} from "../../components/header/header.component";
import {PostService} from "../../../Services/post.service";
import { FooterComponent } from '../../components/footer/footer.component'

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        TrendingPostComponent,
        ChunkArrayPipe,
        HeaderComponent,
        FooterComponent,
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
    _6LatestPosts$: Observable<any>
    newPost: any

    constructor(private postService: PostService) {
        this._6LatestPosts$ = this.postService.getPosts(6)
    }

    ngOnInit() {
        this._6LatestPosts$.subscribe((posts) => {
            this.newPost = posts[0]
        })
    }
}
