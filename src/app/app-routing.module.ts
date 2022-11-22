import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CollectionComponent } from './collection/collection.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ListboxComponent } from './listbox/listbox.component';

const routes: Routes = [
  { path: 'collections', component: CollectionComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: 'listbox', component: ListboxComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
