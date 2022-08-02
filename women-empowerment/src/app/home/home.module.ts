import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq/faq.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { LegislationComponent } from './legislation/legislation.component';
<<<<<<< HEAD
=======
import { ServiceComponent } from './service/service.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
>>>>>>> 3f6bca372cfc9646a1ba813d3a6b76c50ac1854f

@NgModule({
  declarations: [
    FaqComponent,
<<<<<<< HEAD
    LegislationComponent
=======
    LegislationComponent,
    ServiceComponent,
    TermsComponent,
    PrivacyComponent,
    ContactUsComponent
>>>>>>> 3f6bca372cfc9646a1ba813d3a6b76c50ac1854f
  ],
  imports: [
    CommonModule,
    MatExpansionModule
  ]
})
export class HomeModule {}
