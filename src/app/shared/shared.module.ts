import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {KissletComponent} from './kisslet/kisslet.component';
import {SharedRoutingModule} from './shared-routing.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    KissletComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
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
