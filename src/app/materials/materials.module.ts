import { NgModule } from '@angular/core';

import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';

import {MatPaginatorModule} from '@angular/material/paginator';




const materials=[
  MatSliderModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatCardModule,
  MatTabsModule,
  MatTableModule,
  MatPaginatorModule
]
@NgModule({ 
  imports: [
    materials
  ],
  exports: [
    materials
  ]
})
export class MaterialsModule { }
