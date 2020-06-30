import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { BindingtestComponent } from './bindingtest/bindingtest.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemListComponent } from './item-list/item-list.component';
import { StringInitComponent } from './string-init/string-init.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    TutorialComponent,
    BindingtestComponent,
    ItemDetailComponent,
    ItemListComponent,
    StringInitComponent,
    PropertybindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
