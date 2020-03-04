import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './container/sidebar/sidebar.component';
import { NavbarComponent } from './container/navbar/navbar.component';
import { HomeComponent } from './container/home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    NavbarComponent
  ]
})
export class CoreModule { }
