import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PokedexPage } from './pages/pokedex/pokedex.page';

const routes: Routes = [
  {
    path: 'pokedex',
    component: PokedexPage,
  },
  {
    path: '',
    redirectTo: 'pokedex',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
