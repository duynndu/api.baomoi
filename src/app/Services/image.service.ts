import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'

@Injectable({
    providedIn: 'root',
})
export class ImageService {
    api = environment.api + 'admin/images'
    constructor(private httpClient: HttpClient) {}

    getFolderImage(path: string = '') {
        return this.httpClient.get(this.api + '/getFolderImage' + (path ? `/${path}` : ''))
    }
    newFolder(folderName: string) {
        return this.httpClient.get(this.api + '/newFolder' + `/${folderName}`)
    }

    rename(currentName: string, newName: string) {
        return this.httpClient.post(this.api + '/rename', {
            currentName: currentName,
            newName: newName,
        })
    }

    deleteFolder(folderPath: string) {
        return this.httpClient.get(this.api + '/deleteFolder' + `/${folderPath}`)
    }

    deleteFile(filePath: string) {
        return this.httpClient.get(this.api + '/deleteFile' + `/${filePath}`)
    }
}
