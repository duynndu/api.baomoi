import { Component, OnInit, OnDestroy } from '@angular/core'
import { AsyncPipe, CurrencyPipe, DatePipe, NgStyle } from '@angular/common'
import { MenuModule } from 'primeng/menu'
import { ButtonModule } from 'primeng/button'
import { ChartModule } from 'primeng/chart'
import { RippleModule } from 'primeng/ripple'
import { TableModule } from 'primeng/table'
import { MenuItem } from 'primeng/api'
import { lastValueFrom, Observable, Subscription } from 'rxjs'
import { LayoutService } from '../../layout/service/app.layout.service'
import { PostService } from '../../../Services/post.service'
import { CalendarModule } from 'primeng/calendar'
import { FormsModule } from '@angular/forms'

@Component({
    templateUrl: './dashboard.component.html',
    standalone: true,
    imports: [NgStyle, MenuModule, ButtonModule, ChartModule, RippleModule, CurrencyPipe, TableModule, DatePipe, CalendarModule, FormsModule],
    providers: [DatePipe, AsyncPipe],
})
export class DashboardComponent implements OnInit, OnDestroy {
    items!: MenuItem[]

    chartData: any

    chartOptions: any

    subscription!: Subscription

    postsPopular!: any

    viewStatisticsPosts!: Observable<any>

    today = new Date()
    from: any = '2024/02/09'
    to: any = this.datePipe.transform(this.today, 'yyyy/MM/dd')
    type: string = 'DATE'

    constructor(
        public layoutService: LayoutService,
        private postService: PostService,
        private datePipe: DatePipe,
    ) {}

    onChangeDateTo(event: any) {
        this.to = this.datePipe.transform(event, 'yyyy/MM/dd')
        this.viewStatisticsPosts = this.postService.getViewStatisticsPost(this.from, this.to, this.type)
        lastValueFrom(this.viewStatisticsPosts).then((viewStatistics: any) => {
            this.initChart(viewStatistics)
        })
    }

    onChangeDateFrom(event: any) {
        this.from = this.datePipe.transform(event, 'yyyy/MM/dd')
        this.viewStatisticsPosts = this.postService.getViewStatisticsPost(this.from, this.to, this.type)
        lastValueFrom(this.viewStatisticsPosts).then((viewStatistics: any) => {
            this.initChart(viewStatistics)
        })
    }

    ngOnInit() {
        lastValueFrom(this.postService.getPopularPosts()).then((posts: any) => {
            this.postsPopular = posts
        })
        this.viewStatisticsPosts = this.postService.getViewStatisticsPost(this.from, this.to, this.type)
        lastValueFrom(this.viewStatisticsPosts).then((viewStatistics: any) => {
            this.initChart(viewStatistics)
            console.log(viewStatistics)
        })
        this.items = [
            { label: 'Add New', icon: 'pi pi-fw pi-plus' },
            { label: 'Remove', icon: 'pi pi-fw pi-minus' },
        ]
    }

    initChart(data) {
        const documentStyle = getComputedStyle(document.documentElement)
        const textColor = documentStyle.getPropertyValue('--text-color')
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary')
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border')
        this.chartData = {
            labels: data.date,
            datasets: [
                {
                    label: 'Tổng lượt xem',
                    data: data.view_sum,
                    fill: true,
                    tension: 0.4,
                    backgroundColor: 'rgba(255,167,38,0.2)',
                },
                {
                    label: 'Bài đăng: ' + data[0]['post_id'],
                    data: data[0]['view_sum'],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    tension: 0.4,
                },
                {
                    label: 'Bài đăng: ' + data[1]['post_id'],
                    data: data[1]['view_sum'],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--green-500'),
                    tension: 0.4,
                },
                {
                    label: 'Bài đăng: ' + data[2]['post_id'],
                    data: data[2].view_sum,
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--pink-500'),
                    tension: 0.4,
                },
            ],
        }

        this.chartOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor,
                    },
                },
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false,
                    },
                },
                y: {
                    ticks: {
                        color: textColorSecondary,
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false,
                    },
                },
            },
        }
    }

    ngOnDestroy() {
        this.subscription && this.subscription.unsubscribe()
    }
}
