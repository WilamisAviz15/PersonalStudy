import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', 
    // loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule)
    loadChildren: './recipes/recipes.module#RecipesModule'
  },
  { path: 'shopping-list', 
    loadChildren: './shopping-list/shopping-list.module#ShoppingListModule'
  },
  { path: 'auth', 
    loadChildren: './auth/auth.module#AuthModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadingStrategy})],
  exports: [RouterModule]
})
export class AppRoutingModule {}