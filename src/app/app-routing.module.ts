import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PublicComponent} from "./component/public/public.component";
import {PrivateComponent} from "./component/private/private.component";
import {AuthGuard} from "@auth0/auth0-angular";

const routes: Routes = [
  {path: 'public', component: PublicComponent},
  {path: 'private', component: PrivateComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'public', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
