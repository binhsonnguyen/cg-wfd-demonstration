import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {KissletComponent} from './kisslet/kisslet.component';
import {SharedRoutingModule} from './shared-routing.module';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    KissletComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    KissletComponent
  ]
})
export class SharedModule {
}
