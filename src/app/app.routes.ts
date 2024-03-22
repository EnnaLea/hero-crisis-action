import { Route, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center/crisis-center.component';
import { CrisisListComponent } from './crisis-center/crisis-list/crisis-list.component';
import { CrisisDetailsComponent } from './crisis-center/crisis-details/crisis-details.component';
import { CrisisCenterHomeComponent } from './crisis-center/crisis-center-home/crisis-center-home.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin/admin.component';
import { ManageCrisesComponent } from './admin/manage-crises/manage-crises.component';
import { ManageHeroesComponent } from './admin/manage-heroes/manage-heroes.component';
import { authGuard } from './auth/auth.guard';
import { canDeactivateGuard } from './can-deactivate.guard';
import { crisisDetailResolver } from './crisis-center/crisis-detail-resolver.resolver';



export const routes: Routes = [

    {path: 'heroes', loadComponent: ()=> import('./heroes/hero-list/hero-list.component').then(mod=> mod.HeroListComponent), data: { animation: 'heroes' }},
    {path: 'hero/:id', loadComponent: ()=> import('./heroes/hero-detail/hero-detail.component').then(mod=> mod.HeroDetailComponent), data: { animation: 'heroes' }},
    
    {path: 'crisis-center', loadComponent: ()=>import('./crisis-center/crisis-center/crisis-center.component').then(m => m.CrisisCenterComponent), data: { preload: true }, children:[
        {path: '', component: CrisisListComponent, children:[
            {path: ':id', component: CrisisDetailsComponent, canDeactivate: [canDeactivateGuard], resolve: { 
                crisis: crisisDetailResolver
              }},
            {path: '', component: CrisisCenterHomeComponent},
        ]},
    ]},

    {path:'login', loadComponent: ()=>import('./auth/login/login.component').then(m => m.LoginComponent)},

    { path: 'admin', loadComponent: ()=>import('./admin/admin/admin.component').then(m => m.AdminComponent), canActivate: [authGuard], canMatch: [authGuard], children: [
          { path: '', canActivateChild: [authGuard], children: [
              { path: 'crises', component: ManageCrisesComponent },
              { path: 'heroes', component: ManageHeroesComponent },
              { path: '', component: AdminDashboardComponent }
            ]
          }
        ]
      },

    { path: 'compose', component: ComposeMessageComponent, outlet: 'popup'},
    
    {path: 'crisis-center', component: HeroListComponent},

    { path: '', redirectTo: 'heroes', pathMatch: 'full' },
    {path: '**', component: PageNotFoundComponent},      
];

//forRoots
export default routes;
