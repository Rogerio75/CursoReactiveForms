import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Componet
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

const routes: Routes = [{
  path: '',
  component: ReactiveFormsComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
