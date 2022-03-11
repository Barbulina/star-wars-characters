import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
const ANGULAR_MATERIAL_MODULES: any = [
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatCardModule,
];

@NgModule({
  declarations: [],
  imports: [...ANGULAR_MATERIAL_MODULES],
  exports: [...ANGULAR_MATERIAL_MODULES],
})
export class AngularMaterialModule {}
