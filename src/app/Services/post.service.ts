import { inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment'

@Injectable({
    providedIn: 'root',
})
export class PostService {
    httpClient: HttpClient = inject(HttpClient)
    getPostByKeyword(keyword: string) {
        return this.httpClient.get(environment.api + 'getPostByKeyword/' + keyword)
    }
    getPostByCategory(keyword: string) {
        return this.httpClient.get(environment.api + 'getPostByCategory/' + keyword)
    }
    getPosts(limit: any = '') {
        return this.httpClient.get(environment.api + 'posts' + (limit ? `/${limit}` : ''))
    }
    getPost(slug: string) {
        return this.httpClient.get(environment.api + 'post/' + slug)
    }
    getTrendingPost(limit: any = '') {
        return this.httpClient.get(environment.api + 'trendingPosts' + (limit ? `/${limit}` : ''))
    }
    getPopularPosts(limit: any = '') {
        return this.httpClient.get(environment.api + 'popularPosts' + (limit ? `/${limit}` : ''))
    }

    // Admin

    addPost(post: object) {
        return this.httpClient.post(environment.api + 'admin/post/addPost', post)
    }
    editPost(post: object, post_id: number) {
        return this.httpClient.put(environment.api + 'admin/post/editPost', post)
    }
    deletePost(post_ids: string) {
        return this.httpClient.delete(environment.api + 'admin/post/deletePosts/' + post_ids)
    }
    getViewStatisticsPost(from: string, to: string, type: string = 'DATE') {
        return this.httpClient.get(environment.api + 'admin/post/viewStatistics?from=' + from + '&to=' + to + '&type=' + type)
    }
}
