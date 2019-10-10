import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

(function(angular) {

  angular
    .module('app', ['ngRoute'])
    .run($run);

  // Safely instantiate dataLayer
  $run.$inject = ['$rootScope', '$location', '$window'];

  function $run($rootScope, $location, $window) {

    var dataLayer = $window.dataLayer = $window.dataLayer || [];

    $rootScope.$on('$routeChangeSuccess', function() {

      dataLayer.push({
        event: 'ngRouteChange',
        attributes: {
          route: $location.path()
        }
      });

    });

  }

})

