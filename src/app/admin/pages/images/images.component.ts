import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core'
import { BaseIcon } from 'primeng/baseicon'
import { ImageService } from '../../../Services/image.service'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { AsyncPipe, NgForOf, NgIf, NgStyle } from '@angular/common'
import { environment } from '../../../../environments/environment'
import { Observable, Subscription } from 'rxjs'
import { DialogModule } from 'primeng/dialog'
import { MenuModule } from 'primeng/menu'
import { MenuItem, MenuItemCommandEvent } from 'primeng/api'
import { isNumber } from 'chart.js/helpers'
import { FileUploadModule } from 'primeng/fileupload'
import { ContextMenuModule } from 'primeng/contextmenu'

@Component({
    selector: 'app-images',
    standalone: true,
    imports: [BaseIcon, NgForOf, NgStyle, AsyncPipe, DialogModule, MenuModule, NgIf, FileUploadModule, ContextMenuModule],
    templateUrl: './images.component.html',
    styleUrl: './images.component.scss',
})
export class ImagesComponent implements OnInit, OnDestroy {
    // Subscription
    newFolderSubscription!: Subscription
    deleteFileSubscription!: Subscription
    deleteFolderSubscription!: Subscription
    renameSubscription!: Subscription

    // Dialog
    uploadImageDialog: boolean = false

    api = environment.api
    @ViewChild('content', { read: ElementRef }) content: ElementRef
    folderData: Observable<any>
    menuTargetItem: boolean = false
    menuTargetContent: boolean = false
    private _pathUrl: string = ''
    optionMenuTargetContent: MenuItem[] | undefined
    optionMenuTargetItem: MenuItem[] | undefined
    itemTarget: string
    positionX: number = 0
    positionY: number = 0

    @Input() clientX: number = 0
    @Input() clientY: number = 0

    @Output() imageSelectEvent: EventEmitter<string> = new EventEmitter<string>()
    uploadedFiles: Array<any> = []

    onUpload(event: any) {
        console.log(event)
        this.folderData = this.imageService.getFolderImage(this.pathUrl)
    }

    constructor(private imageService: ImageService) {}

    ngOnInit() {
        this.folderData = this.imageService.getFolderImage(this.pathUrl)
        this.optionMenuTargetContent = [
            {
                label: 'File',
                items: [
                    {
                        label: 'New folder',
                        icon: 'pi pi-plus',
                        command: () => {
                            this.newFolder()
                        },
                    },
                    {
                        label: 'Upload file',
                        icon: 'pi pi-upload',
                        command: () => {
                            this.closeAllMenu()
                            this.uploadImageDialog = true
                        },
                    },
                ],
            },
        ]
        this.optionMenuTargetItem = [
            {
                label: 'File',
                items: [
                    {
                        label: 'Delete',
                        icon: 'pi pi-times',
                        command: () => {
                            this.delete()
                        },
                    },
                ],
            },
        ]
    }

    redirect(index) {
        // arr.splice(arr.indexOf('user') + 1, (arr.length -1) - arr.indexOf('user'))
        if (isNumber(index)) {
            const newPath = [...this.path]
            newPath.splice(index + 1, newPath.length - 1 - index)
            if (newPath.join('/') !== this.pathUrl) {
                this.pathUrl = newPath.join('/')
            }
        } else {
            if (this.pathUrl !== '') {
                this.pathUrl = ''
            }
        }
    }
    newFolder() {
        this.closeAllMenu()
        this.newFolderSubscription = this.imageService.newFolder(this.pathUrl + '/New folder').subscribe((res) => {
            this.folderData = this.imageService.getFolderImage(this.pathUrl)
        })
    }

    onRename(event: any, item: string) {
        event.preventDefault()
        this.closeAllMenu()
        let newName = item.split('/')
        newName[newName.length - 1] = event.target.innerText
        this.imageService.rename(this.handlePath(item), this.handlePath(newName.join('/'))).subscribe((res) => {
            this.folderData = this.imageService.getFolderImage(this.pathUrl)
        })
        this.itemTarget = ''
    }

    delete() {
        this.closeAllMenu()
        const path = this.handlePath(this.itemTarget)
        if (this.basename(this.itemTarget).includes('.')) {
            console.log('delete file: ')
            this.deleteFileSubscription = this.imageService.deleteFile(path).subscribe((res) => {
                this.folderData = this.imageService.getFolderImage(this.pathUrl)
            })
        } else {
            console.log('delete folder: ')
            this.deleteFolderSubscription = this.imageService.deleteFolder(path).subscribe((res) => {
                this.folderData = this.imageService.getFolderImage(this.pathUrl)
            })
        }
    }

    handlePath(path: string) {
        return path.replace('uploads/images/', '')
    }

    basename(item: string) {
        return item.split('/').reverse()[0]
    }

    get pathUrl() {
        return this._pathUrl
    }

    set pathUrl(value: string) {
        this._pathUrl = value
        this.folderData = this.imageService.getFolderImage(this.pathUrl)
    }

    get path() {
        return this._pathUrl.split('/')
    }

    onOpenFolder(item: string) {
        this.closeAllMenu()
        if (!item.includes('.')) {
            const newPath = [...this.path, item]
            this.pathUrl = newPath.filter((path) => path !== '').join('/')
        } else {
            this.imageSelectEvent.emit(this.api + 'uploads/images/' + this.pathUrl + '/' + item)
        }
    }

    onBack() {
        const newPath = [...this.path]
        newPath.pop()
        this.pathUrl = newPath.join('/')
        this.closeAllMenu()
    }

    handleRightClick(event: MouseEvent) {
        event.preventDefault()
        this.positionX = event.clientX + this.clientX
        this.positionY = event.clientY + this.clientY
        if (event.target == this.content.nativeElement) {
            this.menuTargetContent = true
            this.menuTargetItem = false
        } else {
            this.menuTargetItem = true
            this.menuTargetContent = false
        }
    }

    handleClickLeft(event: MouseEvent) {
        if (event.target == this.content.nativeElement) {
            this.closeAllMenu()
        }
    }

    closeAllMenu() {
        this.menuTargetContent = false
        this.menuTargetItem = false
        this.uploadImageDialog = false
    }

    ngOnDestroy() {
        this.newFolderSubscription && this.newFolderSubscription.unsubscribe()
        this.deleteFileSubscription && this.deleteFileSubscription.unsubscribe()
        this.deleteFolderSubscription && this.deleteFolderSubscription.unsubscribe()
        this.renameSubscription && this.renameSubscription.unsubscribe()
    }
}
