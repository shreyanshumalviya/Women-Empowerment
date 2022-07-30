import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq/faq.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { LegislationComponent } from './legislation/legislation.component';

@NgModule({
  declarations: [
    FaqComponent,
    LegislationComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule
  ]
})
export class HomeModule {}
