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

    // Admin

    addCategory(category: object) {
        return this.httpClient.post(environment.api + 'admin/category/addCategory', category)
    }
    editCategory(category: object, post_id: number) {
        return this.httpClient.put(environment.api + 'admin/category/editCategory', category)
    }
    deleteCategory(category_ids: string) {
        return this.httpClient.delete(environment.api + 'admin/category/deleteCategories/' + category_ids)
    }
}
