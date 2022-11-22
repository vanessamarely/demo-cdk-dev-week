import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectionComponent } from './collection/collection.component';
import { AccordionComponent } from './accordion/accordion.component';

import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CdkListboxModule } from '@angular/cdk/listbox';
import { ListboxComponent } from './listbox/listbox.component';
@NgModule({
  declarations: [AppComponent, CollectionComponent, AccordionComponent, ListboxComponent],
  imports: [BrowserModule, AppRoutingModule, CdkAccordionModule, CdkListboxModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
