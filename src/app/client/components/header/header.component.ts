import {CommonModule} from "@angular/common";
import {Component, OnInit} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SearchComponent} from "../search/search.component";
import {RouterLink} from "@angular/router";
import {Observable} from "rxjs";
import {CategoryService} from "../../../Services/category.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SearchComponent,
        RouterLink
    ],
    styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
    activeSearchBar: boolean = false;

    categories: Observable<any>;

    constructor(
        private categoryService: CategoryService
    ) {
        this.categories = this.categoryService.getCategories();
    }

    onSearchBar(active: boolean){
        this.activeSearchBar = active
    }
    ngOnInit() {

    }
}
