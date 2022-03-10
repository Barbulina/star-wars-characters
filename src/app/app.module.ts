import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterListComponent } from './shared/components/character-list/character-list.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { PaginationComponent } from './shared/components/pagination/pagination.component';
import { CharacterDetailComponent } from './shared/components/character-detail/character-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    PageNotFoundComponent,
    PaginationComponent,
    CharacterDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
