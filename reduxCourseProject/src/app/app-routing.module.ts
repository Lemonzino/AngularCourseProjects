import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './core/home/home.component';

const addRoutes: Routes = [
	{ path: "", component: HomeComponent },
	{ path: "recipes", loadChildren: './recipes/recipes.module#RecipesModule' },
	{ path: "shopping-list", component: ShoppingListComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(addRoutes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {

}
