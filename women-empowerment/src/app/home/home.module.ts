import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq/faq.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { LegislationComponent } from './legislation/legislation.component';
import { ServiceComponent } from './service/service.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';

@NgModule({
  declarations: [
    FaqComponent,
    LegislationComponent,
    ServiceComponent,
    TermsComponent,
    PrivacyComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule
  ]
})
export class HomeModule {}
