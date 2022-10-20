import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemBirreComponent } from './item-birre/item-birre.component';
import { SearchBirreComponent } from './search-birre/search-birre.component';

const routes: Routes = [
  {path: 'search-birre', component: SearchBirreComponent},
  {path: 'item-birre/:id', component: ItemBirreComponent},
  {path: '', redirectTo: '/search-birre', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
