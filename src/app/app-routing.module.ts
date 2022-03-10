import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from './routers';
import { CharacterListComponent } from './shared/components/character-list/character-list.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: ROUTES.CHARACTER_LIST,
    component: CharacterListComponent,
  },
  {
    path: '',
    redirectTo: ROUTES.CHARACTER_LIST,
    pathMatch: 'full',
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
