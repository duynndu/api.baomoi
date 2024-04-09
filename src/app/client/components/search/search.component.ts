import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AutoCompleteCompleteEvent, AutoCompleteModule} from "primeng/autocomplete";
import {Router} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        AutoCompleteModule,
    ],
    styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit{
    @Input() active:boolean;
    @Output() closeSearchBar: EventEmitter<boolean> = new EventEmitter<boolean>();
    keywords: any[] | undefined;
    formGroup: FormGroup | undefined;
    filteredKeywords: any[] | undefined;
    constructor(
        private router: Router,
    ) {
    }
    ngOnInit() {
        this.keywords = ['bóng đá','sức khoẻ','làm đẹp','giải trí','khoa học','du lịch'];
        this.formGroup = new FormGroup({
            selectedKeyword: new FormControl<object | null>(null)
        });
    }

    filterKeyword(event: AutoCompleteCompleteEvent) {
        let filtered: any[] = [];
        let query = event.query;

        for (let i = 0; i < (this.keywords as any[]).length; i++) {
            let keyword = (this.keywords as any[])[i];
            if (keyword.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(keyword);
            }
        }

        this.filteredKeywords = filtered;
    }

    onSubmit(){
        this.router.navigate(['/search',this.formGroup.value.selectedKeyword]);
    }

    protected readonly blur = blur;
}
