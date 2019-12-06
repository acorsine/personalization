import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { RichComponent } from './rich/rich.component';

const routes: Routes = [
  { path:'', component: RichComponent},
  {path: 'profileform', component: ProfileEditorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//* angular.module('virtualPage', [])
//.run(function ($rootScope, $window) {
//    $rootScope.$on("$routeChangeStart",function(event, next, current){
   // Caso o evento do angular seja de alteracao de rota disparar o evento customizado
//   if(next.templateUrl) {
       // Evento customizado do google tag manager
//       $window.dataLayer.push(
//         {
//           'event': 'routeChange’,
//           'virtualPageView': next.templateUrl
//         }
//      );
//    }
//  });
//*});
//export const AppRoutingModule = RouterModule.forRoot(routes);


