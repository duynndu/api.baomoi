import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { ButtonModule } from 'primeng/button'
import { AsyncPipe, CurrencyPipe, DatePipe, NgClass, NgIf } from '@angular/common'
import { DialogModule } from 'primeng/dialog'
import { DropdownModule } from 'primeng/dropdown'
import { FileUploadModule } from 'primeng/fileupload'
import { InputNumberModule } from 'primeng/inputnumber'
import { InputTextModule } from 'primeng/inputtext'
import { InputTextareaModule } from 'primeng/inputtextarea'
import { RadioButtonModule } from 'primeng/radiobutton'
import { RatingModule } from 'primeng/rating'
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms'
import { RippleModule } from 'primeng/ripple'
import { MessageService, SharedModule } from 'primeng/api'
import { Table, TableModule } from 'primeng/table'
import { ToastModule } from 'primeng/toast'
import { ToolbarModule } from 'primeng/toolbar'
import { PostService } from '../../../Services/post.service'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { CategoryService } from '../../../Services/category.service'
import { environment } from '../../../../environments/environment'
import { QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent } from 'ngx-quill'
import { SelectImageComponent } from '../../components/select-image/select-image.component'
import { Observable, Subscription } from 'rxjs'
import { ImagesComponent } from '../images/images.component'

@Component({
    imports: [
        ButtonModule,
        CurrencyPipe,
        DialogModule,
        DropdownModule,
        FileUploadModule,
        InputNumberModule,
        InputTextModule,
        InputTextareaModule,
        NgIf,
        RadioButtonModule,
        RatingModule,
        ReactiveFormsModule,
        RippleModule,
        SharedModule,
        TableModule,
        ToastModule,
        ToolbarModule,
        FormsModule,
        DatePipe,
        NgClass,
        QuillEditorComponent,
        QuillViewComponent,
        QuillViewHTMLComponent,
        SelectImageComponent,
        AsyncPipe,
        ImagesComponent,
    ],
    providers: [MessageService],
    selector: 'app-posts',
    standalone: true,
    styleUrl: './posts.component.scss',
    templateUrl: './posts.component.html',
})
export class PostsComponent implements OnInit, OnDestroy {
    addPostSubscription!: Subscription
    editPostSubscription!: Subscription
    deletePostSubscription!: Subscription
    deletePostsSubscription!: Subscription

    @ViewChild('formGroup', {}) formGroup: NgForm

    api = environment.api
    postDialog: boolean = false
    deletePostDialog: boolean = false
    deletePostsDialog: boolean = false
    categories: any
    posts: Observable<any>
    post: any = {}
    selectedPosts: Array<any> = []

    submitted: boolean = false

    action: string

    constructor(
        private messageService: MessageService,
        private postService: PostService,
        private categoryService: CategoryService,
    ) {
        this.categoryService
            .getCategories()
            .pipe(takeUntilDestroyed())
            .subscribe((categories) => {
                this.categories = categories
            })
    }

    ngOnInit() {
        this.posts = this.postService.getPosts()
    }

    openNew() {
        this.action = 'add'
        this.post = {}
        this.submitted = false
        this.postDialog = true
    }

    deleteSelectedPosts() {
        this.deletePostsDialog = true
    }

    editPost(post: any) {
        this.post = post
        this.action = 'edit'
        this.postDialog = true
    }

    deletePost(post: any) {
        this.deletePostDialog = true
        this.post = post
    }

    confirmDeleteSelected() {
        this.deletePostsDialog = false
        this.deletePostsSubscription = this.postService.deletePost(this.selectedPosts.map((post) => post.id).join(';')).subscribe(() => {
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Posts Deleted', life: 3000 })
            this.selectedPosts = []
            this.posts = this.postService.getPosts()
        })
    }

    confirmDelete() {
        this.deletePostDialog = false
        this.deletePostSubscription = this.postService.deletePost(this.post.id).subscribe(() => {
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Post Deleted', life: 3000 })
            this.post = {}
            this.posts = this.postService.getPosts()
        })
    }

    hideDialog() {
        this.postDialog = false
        this.submitted = false
    }

    savePost() {
        this.submitted = true
        if (this.formGroup.valid) {
            switch (this.action) {
                case 'add': {
                    console.log('add')
                    this.addPostSubscription = this.postService.addPost(this.post).subscribe(() => {
                        this.posts = this.postService.getPosts()
                        this.postDialog = false
                        this.post = {}
                    })
                    break
                }
                case 'edit': {
                    console.log('edit')
                    this.editPostSubscription = this.postService.editPost(this.post, this.post.id).subscribe(
                        (res) => {
                            this.posts = this.postService.getPosts()
                            this.postDialog = false
                            this.post = {}
                        },
                        (err) => {
                            console.log(err)
                        },
                    )
                    break
                }
                default: {
                    console.log(this.action + ' is not exits')
                }
            }
        }
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains')
    }

    onSelectImage(event: string) {
        this.post.image = event
        this.selectImageDialog = false
    }

    ngOnDestroy() {
        this.addPostSubscription && this.addPostSubscription.unsubscribe()
        this.editPostSubscription && this.editPostSubscription.unsubscribe()
        this.deletePostSubscription && this.deletePostSubscription.unsubscribe()
        this.deletePostsSubscription && this.deletePostsSubscription.unsubscribe()
    }

    protected readonly event = event
    selectImageDialog: boolean = false
}
