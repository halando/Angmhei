import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { InformaciokComponent } from '/.informaciok.component';

@NgModule({
  declarations: [ InformaciokComponent],
  imports: [
    CommonModule,
    MatSelectModule
  ],
})
export class HelyszinekModule { }
