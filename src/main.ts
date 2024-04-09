import { bootstrapApplication } from '@angular/platform-browser'
import { AppComponent } from './app/app.component'
import { provideRouter } from '@angular/router'
import { APP_ROUTE } from './app/app.route'
import { provideHttpClient, withInterceptors } from '@angular/common/http'
import { provideAnimations } from '@angular/platform-browser/animations'
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt'
import { customInterceptor } from './app/Services/custom.interceptor'
// { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' }
bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(APP_ROUTE),
        provideHttpClient(withInterceptors([customInterceptor])),
        provideAnimations(),
        { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
        JwtHelperService,
    ],
}).then((r) => r)
