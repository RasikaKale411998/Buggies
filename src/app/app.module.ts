import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './containers';
import { LocalStorageService } from 'ngx-webstorage';
import { HeaderComponent } from './containers/header/header.component';
import { FooterComponent } from './containers/footer/footer.component';
import { SidebarComponent } from './containers/sidebar/sidebar.component';
import { DriverMgtComponent } from './view/driver-mgt/driver-mgt.component';
import { VehicleMgtComponent } from './view/vehicle-mgt/vehicle-mgt.component';
import { VehicleTypeComponent } from './view/vehicle-type/vehicle-type.component';
import { RideMgtComponent } from './view/ride-mgt/ride-mgt.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModalComponent } from './view/common-modal/common-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DriverMgtComponent,
    VehicleMgtComponent,
    VehicleTypeComponent,
    RideMgtComponent,
    CommonModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule, 
    RouterModule,
    NgxWebstorageModule.forRoot(),
    NgbModalModule,
    FormsModule,
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
