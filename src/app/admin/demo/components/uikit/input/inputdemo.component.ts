import { Component, OnInit } from '@angular/core'
import { SelectItem } from 'primeng/api'
import { CountryService } from '../../../service/country.service'
import { ChipsModule } from 'primeng/chips'
import { AutoCompleteModule } from 'primeng/autocomplete'
import { FormsModule } from '@angular/forms'
import { CalendarModule } from 'primeng/calendar'
import { PaginatorModule } from 'primeng/paginator'
import { InputTextareaModule } from 'primeng/inputtextarea'
import { SliderModule } from 'primeng/slider'
import { RatingModule } from 'primeng/rating'
import { ColorPickerModule } from 'primeng/colorpicker'
import { KnobModule } from 'primeng/knob'
import { RadioButtonModule } from 'primeng/radiobutton'
import { CheckboxModule } from 'primeng/checkbox'
import { InputSwitchModule } from 'primeng/inputswitch'
import { ListboxModule } from 'primeng/listbox'
import { MultiSelectModule } from 'primeng/multiselect'
import { ToggleButtonModule } from 'primeng/togglebutton'
import { SelectButtonModule } from 'primeng/selectbutton'
import { InputGroupAddonModule } from 'primeng/inputgroupaddon'
import { InputGroupModule } from 'primeng/inputgroup'

@Component({
    standalone: true,
    templateUrl: './inputdemo.component.html',
    imports: [
        ChipsModule,
        AutoCompleteModule,
        FormsModule,
        CalendarModule,
        PaginatorModule,
        InputTextareaModule,
        SliderModule,
        RatingModule,
        ColorPickerModule,
        KnobModule,
        RadioButtonModule,
        CheckboxModule,
        InputSwitchModule,
        ListboxModule,
        MultiSelectModule,
        ToggleButtonModule,
        SelectButtonModule,
        InputGroupAddonModule,
        InputGroupModule,
    ],
})
export class InputDemoComponent implements OnInit {
    countries: any[] = []

    filteredCountries: any[] = []

    selectedCountryAdvanced: any[] = []

    valSlider = 50

    valColor = '#424242'

    valRadio: string = ''

    valCheck: string[] = []

    valCheck2: boolean = false

    valSwitch: boolean = false

    cities: SelectItem[] = []

    selectedList: SelectItem = { value: '' }

    selectedDrop: SelectItem = { value: '' }

    selectedMulti: any[] = []

    valToggle = false

    paymentOptions: any[] = []

    valSelect1: string = ''

    valSelect2: string = ''

    valueKnob = 20

    constructor(private countryService: CountryService) {}

    ngOnInit() {
        this.countryService.getCountries().then((countries) => {
            this.countries = countries
        })

        this.cities = [
            { label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } },
            { label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } },
            { label: 'London', value: { id: 3, name: 'London', code: 'LDN' } },
            { label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } },
            { label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } },
        ]

        this.paymentOptions = [
            { name: 'Option 1', value: 1 },
            { name: 'Option 2', value: 2 },
            { name: 'Option 3', value: 3 },
        ]
    }

    filterCountry(event: any) {
        const filtered: any[] = []
        const query = event.query
        for (let i = 0; i < this.countries.length; i++) {
            const country = this.countries[i]
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country)
            }
        }

        this.filteredCountries = filtered
    }
}
