import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { NosOffresComponent } from './nos-offres/nos-offres.component';
import { SeConnecterComponent } from './se-connecter/se-connecter.component';
import { ContactComponent } from './contact/contact.component';
import { VehiculesComponent } from './vehicules/vehicules.component';

const routes: Routes = [
  { path: 'acceuil', component: FirstComponent},
  {path: 'nosoffres', component: NosOffresComponent},
  {path:'seconnecter', component: SeConnecterComponent},
  {path:'contact',component:ContactComponent},
  {path:'vehicules', component: VehiculesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
