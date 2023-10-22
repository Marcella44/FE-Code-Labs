import { NgModule } from '@angular/core'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard.service';
import { canDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
    { path: ':id/:name', component: UsersComponent }, //dynamic path segment parameter
  ] },

  { path: 'servers', // canActivate: [AuthGuard],
  canActivateChild: [AuthGuard], component: ServersComponent, children: [
    { path: ':id', component: ServersComponent },   // child group route
    { path: ':id/edit', component: EditServerComponent, canDeactivate: [canDeactivateGuard] }
  ] },
  // { path: 'not-found', component: PageNotFoundComponent },  //loads to a component
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  { path: '**', redirectTo: '/not-found' },  //redirects to another route  //** is a wildcard catch all (needs to be the last in your array of routes)/
  // { path: '', redirectTo: '/somewhere-else', pathMatch: 'full' } use to match the full path and not just the prefix
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})


export class AppRoutingModule {

}
