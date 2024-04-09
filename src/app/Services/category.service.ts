import { inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'

@Injectable({
    providedIn: 'root',
})
export class CategoryService {
    httpClient: HttpClient = inject(HttpClient)
    //get
    getCategories() {
        return this.httpClient.get(environment.api + 'categories')
    }
    getCategory(slug: string) {
        return this.httpClient.get(environment.api + 'category/' + slug)
    }
}
