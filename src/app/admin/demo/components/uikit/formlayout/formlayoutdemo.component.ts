import { Component } from '@angular/core'
import { ChipsModule } from 'primeng/chips'
import { ButtonModule } from 'primeng/button'
import { DropdownModule } from 'primeng/dropdown'
import { FormsModule } from '@angular/forms'
import { InputTextareaModule } from 'primeng/inputtextarea'

@Component({
    standalone: true,
    templateUrl: './formlayoutdemo.component.html',
    imports: [ChipsModule, ButtonModule, DropdownModule, FormsModule, InputTextareaModule],
})
export class FormLayoutDemoComponent {
    selectedState: any = null

    states: any[] = [
        { name: 'Arizona', code: 'Arizona' },
        { name: 'California', value: 'California' },
        { name: 'Florida', code: 'Florida' },
        { name: 'Ohio', code: 'Ohio' },
        { name: 'Washington', code: 'Washington' },
    ]

    dropdownItems = [
        { name: 'Option 1', code: 'Option 1' },
        { name: 'Option 2', code: 'Option 2' },
        { name: 'Option 3', code: 'Option 3' },
    ]

    cities1: any[] = []

    cities2: any[] = []

    city1: any = null

    city2: any = null
}
