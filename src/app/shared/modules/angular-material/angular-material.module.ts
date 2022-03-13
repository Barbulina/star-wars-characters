import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';

const ANGULAR_MATERIAL_MODULES: any = [
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
];

@NgModule({
  declarations: [],
  imports: [...ANGULAR_MATERIAL_MODULES],
  exports: [...ANGULAR_MATERIAL_MODULES],
})
export class AngularMaterialModule {}
