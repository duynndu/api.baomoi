import { Component } from '@angular/core'
import { Message, MessageService } from 'primeng/api'
import { ToastModule } from 'primeng/toast'
import { MessagesModule } from 'primeng/messages'
import { MessageModule } from 'primeng/message'
import { ChipsModule } from 'primeng/chips'
import { ButtonModule } from 'primeng/button'

@Component({
    templateUrl: './messagesdemo.component.html',
    standalone: true,
    providers: [MessageService],
    imports: [ToastModule, MessagesModule, MessageModule, ChipsModule, ButtonModule],
})
export class MessagesDemoComponent {
    msgs: Message[] = []

    constructor(private service: MessageService) {}

    showInfoViaToast() {
        this.service.add({ key: 'tst', severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' })
    }

    showWarnViaToast() {
        this.service.add({ key: 'tst', severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes' })
    }

    showErrorViaToast() {
        this.service.add({ key: 'tst', severity: 'error', summary: 'Error Message', detail: 'Validation failed' })
    }

    showSuccessViaToast() {
        this.service.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'Message sent' })
    }

    showInfoViaMessages() {
        this.msgs = []
        this.msgs.push({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' })
    }

    showWarnViaMessages() {
        this.msgs = []
        this.msgs.push({ severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes' })
    }

    showErrorViaMessages() {
        this.msgs = []
        this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' })
    }

    showSuccessViaMessages() {
        this.msgs = []
        this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Message sent' })
    }
}
