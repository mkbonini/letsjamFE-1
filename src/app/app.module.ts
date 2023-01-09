import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ResultsPageComponent } from './results-page/results-page.component';
import { JammerProfileComponent } from './jammer-profile/jammer-profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { JamRequestsComponent } from './jam-requests/jam-requests.component';
import { AcceptedJammersComponent } from './accepted-jammers/accepted-jammers.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { FormsModule } from '@angular/forms'
import { MonitorInterceptor } from './monitor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchbarComponent,
    ResultsPageComponent,
    JammerProfileComponent,
    UserProfileComponent,
    JamRequestsComponent,
    AcceptedJammersComponent,
    UserInfoComponent,
    UserEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: MonitorInterceptor, 
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
