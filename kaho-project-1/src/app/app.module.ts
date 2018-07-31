import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { CityComponent } from './city/city.component';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { EditCityDetailComponent } from './edit-city-detail/edit-city-detail.component';
import { UserComponent } from './user/user.component';
import { CitySearchComponent } from './city-search/city-search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
),

NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    MessagesComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    CityComponent,
    CityDetailComponent,
    EditCityDetailComponent,
    UserComponent,
    CitySearchComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
