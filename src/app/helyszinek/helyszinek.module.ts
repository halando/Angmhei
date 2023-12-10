import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { HelyszinekComponent } from '/.helyszinek.component';

@NgModule({
  declarations: [ HelyszinekComponent],
  imports: [
    CommonModule,
    MatSelectModule
  ],
})
export class HelyszinekModule { }
