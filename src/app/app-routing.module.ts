import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { DisplayComponent } from './components/display/display/display.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {path: '', component:DisplayComponent},
  {path: 'contact', component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
