import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServicesComponent } from './services/services.component';
import { ClientsComponent } from './clients/clients.component';

// used to create fake backend


const routes: Routes  =[
  
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'clients', component: ClientsComponent },
  { path: '**', component: PagenotfoundComponent },


]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent,
  
    ServicesComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)//<--Debugging purposes only)
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
