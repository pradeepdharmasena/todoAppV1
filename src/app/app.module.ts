import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppUserModule } from './app-user/app-user.module';
import { ToDosModule } from './to-dos/to-dos.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppUserModule,
    HttpClientModule
  ],
  providers: [
    AppUserModule,
    ToDosModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
