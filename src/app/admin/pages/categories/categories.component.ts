import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { AsyncPipe, CurrencyPipe, DatePipe, NgClass, NgIf } from '@angular/common'
import { ButtonModule } from 'primeng/button'
import { DialogModule } from 'primeng/dialog'
import { DropdownModule } from 'primeng/dropdown'
import { FileUploadModule } from 'primeng/fileupload'
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms'
import { ImagesComponent } from '../images/images.component'
import { InputTextModule } from 'primeng/inputtext'
import { InputTextareaModule } from 'primeng/inputtextarea'
import { InputNumberModule } from 'primeng/inputnumber'
import { RadioButtonModule } from 'primeng/radiobutton'
import { RatingModule } from 'primeng/rating'
import { RippleModule } from 'primeng/ripple'
import { MessageService, SharedModule } from 'primeng/api'
import { Table, TableModule } from 'primeng/table'
import { ToastModule } from 'primeng/toast'
import { ToolbarModule } from 'primeng/toolbar'
import { QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent } from 'ngx-quill'
import { SelectImageComponent } from '../../components/select-image/select-image.component'
import { Observable, Subscription } from 'rxjs'
import { environment } from '../../../../environments/environment'
import { CategoryService } from '../../../Services/category.service'

@Component({
    selector: 'app-categories',
    standalone: true,
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
    templateUrl: './categories.component.html',
    styleUrl: './categories.component.scss',
})
export class CategoriesComponent implements OnInit, OnDestroy {
    addCategorySubscription!: Subscription
    editCategorySubscription!: Subscription
    deleteCategorySubscription!: Subscription
    deleteCategoriesSubscription!: Subscription

    @ViewChild('formGroup', {}) formGroup: NgForm

    api = environment.api
    categoryDialog: boolean = false
    deleteCategoryDialog: boolean = false
    deleteCategoriesDialog: boolean = false
    categories: Observable<any>
    category: any = {}
    selectedCategories: Array<any> = []

    submitted: boolean = false

    action: string

    constructor(
        private messageService: MessageService,
        private categoryService: CategoryService,
    ) {}

    ngOnInit() {
        this.categories = this.categoryService.getCategories()
    }

    openNew() {
        this.action = 'add'
        this.category = {}
        this.submitted = false
        this.categoryDialog = true
    }

    deleteSelectedCategories() {
        this.deleteCategoriesDialog = true
    }

    editCategory(category: any) {
        this.category = category
        this.action = 'edit'
        this.categoryDialog = true
    }

    deleteCategory(category: any) {
        this.deleteCategoryDialog = true
        this.category = category
    }

    confirmDeleteSelected() {
        this.deleteCategoriesDialog = false
        this.deleteCategoriesSubscription = this.categoryService
            .deleteCategory(this.selectedCategories.map((post) => post.id).join(';'))
            .subscribe(() => {
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Posts Deleted', life: 3000 })
                this.selectedCategories = []
                this.categories = this.categoryService.getCategories()
            })
    }

    confirmDelete() {
        this.deleteCategoryDialog = false
        this.deleteCategorySubscription = this.categoryService.deleteCategory(this.category.id).subscribe(() => {
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Post Deleted', life: 3000 })
            this.category = {}
            this.categories = this.categoryService.getCategories()
        })
    }

    hideDialog() {
        this.categoryDialog = false
        this.submitted = false
    }

    saveCategory() {
        this.submitted = true
        if (this.formGroup.valid) {
            switch (this.action) {
                case 'add': {
                    console.log('add')
                    this.addCategorySubscription = this.categoryService.addCategory(this.category).subscribe(() => {
                        this.categories = this.categoryService.getCategories()
                        this.categoryDialog = false
                        this.category = {}
                    })
                    break
                }
                case 'edit': {
                    console.log('edit')
                    this.editCategorySubscription = this.categoryService.editCategory(this.category, this.category.id).subscribe((res) => {
                        this.categories = this.categoryService.getCategories()
                        this.categoryDialog = false
                        this.category = {}
                    })
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

    ngOnDestroy() {
        this.addCategorySubscription && this.addCategorySubscription.unsubscribe()
        this.editCategorySubscription && this.editCategorySubscription.unsubscribe()
        this.deleteCategorySubscription && this.deleteCategorySubscription.unsubscribe()
        this.deleteCategoriesSubscription && this.deleteCategoriesSubscription.unsubscribe()
    }
}
