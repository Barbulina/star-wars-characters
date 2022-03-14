import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterDetailComponent } from './shared/components/character-detail/character-detail.component';
import { CharacterListComponent } from './shared/components/character-list/character-list.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { PaginationComponent } from './shared/components/pagination/pagination.component';
import { AngularMaterialModule } from './shared/modules/angular-material/angular-material.module';
import { TableComponent } from './shared/components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CharacterPropertyComponent } from './shared/components/character-property/character-property.component';
import { FilmComponent } from './shared/components/film/film.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    PageNotFoundComponent,
    PaginationComponent,
    CharacterDetailComponent,
    TableComponent,
    CharacterPropertyComponent,
    FilmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
