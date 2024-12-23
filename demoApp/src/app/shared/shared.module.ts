import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LazyImageComponent } from './components/lazy-image/lazy-image.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent,
    LazyImageComponent
  ],
  exports:[
    SidebarComponent,
    LazyImageComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
