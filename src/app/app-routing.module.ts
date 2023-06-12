// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './view/login/login.component';
import { DefaultLayoutComponent } from './containers';
import { AuthGuard } from './_helpers/auth.guard';
import { RideMgtComponent } from './view/ride-mgt/ride-mgt.component';
import { DriverMgtComponent } from './view/driver-mgt/driver-mgt.component';
import { VehicleMgtComponent } from './view/vehicle-mgt/vehicle-mgt.component';
import { VehicleTypeComponent } from './view/vehicle-type/vehicle-type.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  
  // Add a default route that redirects to the home page
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { 
    path: 'home',
    component: DefaultLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'rideMgt', component: RideMgtComponent },
      { path: 'driverMgt', component: DriverMgtComponent },
      { path: 'vehicleMgt', component: VehicleMgtComponent },
      { path: 'vehicleType', component: VehicleTypeComponent },
    ]
  },
  { path: '**', redirectTo: '/home/rideMgt', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
