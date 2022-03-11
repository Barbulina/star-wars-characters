import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';

const ANGULAR_MATERIAL_MODULES: any = [
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatButtonModule,
];

@NgModule({
  declarations: [],
  imports: [...ANGULAR_MATERIAL_MODULES],
  exports: [...ANGULAR_MATERIAL_MODULES],
})
export class AngularMaterialModule {}
