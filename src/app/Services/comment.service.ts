import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment'

@Injectable({
    providedIn: 'root',
})
export class CommentService {
    constructor(private httpClient: HttpClient) {}
    getCommentOfThePost(slug: string): Observable<any> {
        return this.httpClient.get(environment.api + 'getCommentsOfThePost/' + slug)
    }

    postComment(data: object): Observable<any> {
        return this.httpClient.post(environment.api + 'postComment', data)
    }
}
