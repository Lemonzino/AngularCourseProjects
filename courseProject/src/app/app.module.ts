import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule.withServerTransition({ appId: "my-app" }),
		AppRoutingModule,
		HttpClientModule,
		ShoppingListModule,
		SharedModule,
		AuthModule,
		CoreModule
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
