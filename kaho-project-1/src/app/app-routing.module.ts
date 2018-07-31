import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { CityComponent } from './city/city.component';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { EditCityDetailComponent } from './edit-city-detail/edit-city-detail.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
 /*{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },*/

  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: 'login/menu/city/c-detail/:id', component: CityDetailComponent },
  { path: 'login/menu/city', component: CityComponent },
  { path: 'city-detail', component: CityDetailComponent },
  { path: 'login/menu/city/c-details-edit/:id', component: EditCityDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login/menu', component: MenuComponent },
  { path: 'user', component: UserComponent },
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
