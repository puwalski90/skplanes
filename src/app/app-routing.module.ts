import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./core/dashboard/dashboard.component";
import {LoginComponent} from "./core/login/login.component";
import {AdminComponent} from "./admin/admin.component";
import {AuthGuard} from "./core/services/auth.guard";
import {AdminGuard} from "./core/services/admin.guard";
import {AdministratorComponent} from "./administrator/administrator.component";
import {Dash3Component} from "./administrator/dash3/dash3.component";
import {PageNotFoundComponent} from "./core/page-not-found/page-not-found.component";

const ROUTES: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'flights', pathMatch: 'full'},
      { path: 'flights', loadChildren: () => import('./flights/flights.module').then(x => x.FlightsModule) },
      // { path: 'flights', component: FlightsComponent },
      // { path: 'flights/:key', component: EditFlightComponent },
       { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'administrator',
    component: AdministratorComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => import('./administrator/administrator.module').then(x => x.AdministratorModule) },
      { path: 'dash3', component: Dash3Component }
    ]
  },
  { path: '**', component: PageNotFoundComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
