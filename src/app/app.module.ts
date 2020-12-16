import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ServiceWorkerModule } from '@angular/service-worker'
import { environment } from '../environments/environment'
import { HomeComponent } from './home/home.component'
import { sharedModule } from './@shared/shared.module'
import { FormsModule } from '@angular/forms'
@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    sharedModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
