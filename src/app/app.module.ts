import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { WorkersComponent } from './workers/workers.component';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  {
  path: '', 
  component: MenuComponent
  },
  {
  path: 'profile', 
  component: ProfileComponent,
  canActivate: [AuthenticationGuard],
  data: {permission: ["user", "admin"]}
  },
  {
  path: 'settings', 
  component: SettingsComponent,
  canActivate: [AuthenticationGuard],
  data: {permission: "admin"}
  },
  {
  path: 'workers', 
  component: WorkersComponent,
  canActivate: [AuthenticationGuard],
  data: {permission: "admin"}
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SettingsComponent,
    WorkersComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [
    [RouterModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
