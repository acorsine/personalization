import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { RichComponent } from './rich/rich.component';
import { InteractComponent } from './interact/interact.component';

const routes: Routes = [
  {path:'', component: RichComponent},
  {path: 'profileform', component: ProfileEditorComponent},
  {path: 'interact', component: InteractComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



