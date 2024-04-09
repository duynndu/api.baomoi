import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Product } from '../api/product'

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    constructor(private http: HttpClient) {}

    getProductsSmall() {
        return this.http
            .get<any>('assets/demo/data/products-small.json')
            .toPromise()
            .then((res) => res.data as Product[])
            .then((data) => data)
    }

    getProducts() {
        return this.http
            .get<any>('assets/demo/data/products.json')
            .toPromise()
            .then((res) => res.data as Product[])
            .then((data) => data)
    }

    getProductsMixed() {
        return this.http
            .get<any>('assets/demo/data/products-mixed.json')
            .toPromise()
            .then((res) => res.data as Product[])
            .then((data) => data)
    }

    async getProductsWithOrdersSmall() {
        let res = await this.http.get<any>('assets/demo/data/products-orders-small.json').toPromise()
        return res.data as Product[]
    }
}
