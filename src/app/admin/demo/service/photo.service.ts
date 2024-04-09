import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Image } from '../api/image'

@Injectable({
    providedIn: 'root',
})
export class PhotoService {
    constructor(private http: HttpClient) {}

    async getImages() {
        let res = await this.http.get<any>('assets/demo/data/photos.json').toPromise()
        return res.data as Image[]
    }
}
