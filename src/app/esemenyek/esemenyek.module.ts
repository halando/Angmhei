import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { EsemenyekComponent } from './esemenyek.component';

@NgModule({
  declarations: [EsemenyekComponent],
  imports: [
    CommonModule,
    MatSelectModule
  ],
})
export class EsemenyekModule { }
