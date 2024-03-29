import { NgModule } from '@angular/core';

import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from "./services/auth-guard.service";


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', 
  loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),    
  canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./public/dashboard/dashboard.module').then( m => m.DashboardPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'list',
    loadChildren: () => import('./chantier/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'materielexist',
    loadChildren: () => import('./chantier/materielexist/materielexist.module').then( m => m.MaterielexistPageModule)
  },
  {
    path: 'materielexist/:id/:nameChantier',
    loadChildren: () => import('./chantier/materielexist/materielexist.module').then( m => m.MaterielexistPageModule)
  },
  {
    path: 'chantier-single',
    loadChildren: () => import('./chantier-single/chantier-single.module').then( m => m.ChantierSinglePageModule)
  },
  {
    path: 'chantier-single/:id_materiel',
    loadChildren: () => import('./chantier-single/chantier-single.module').then( m => m.ChantierSinglePageModule)
  },
  {
    path: 'demande-materiel',
    loadChildren: () => import('./members/demande-materiel/demande-materiel.module').then( m => m.DemandeMaterielPageModule)
  },
  {
    path: 'make-materiel',
    loadChildren: () => import('./make-materiel/make-materiel.module').then( m => m.MakeMaterielPageModule)
  },
  {
    path: 'transfert-materiel/:id/:nameChantier',
    loadChildren: () => import('./members/transfert-materiel/transfert-materiel.module').then( m => m.TransfertMaterielPageModule)
  },
  {
    path: 'list-chantier-transfert',
    loadChildren: () => import('./membres/list-chantier-transfert/list-chantier-transfert.module').then( m => m.ListChantierTransfertPageModule)
  },
  {
    path: 'membrestransfertmaterielview/:id',
    loadChildren: () => import('./membrestransfertmaterielview/membrestransfertmaterielview.module').then( m => m.MembrestransfertmaterielviewPageModule)
  },
  {
    path: 'transfertaquis',
    loadChildren: () => import('./membres/transfertaquis/transfertaquis.module').then( m => m.TransfertaquisPageModule)
  },
  {
    path: 'accusedereception/:id',
    loadChildren: () => import('./membres/accusedereception/accusedereception.module').then( m => m.AccusedereceptionPageModule)
  },
  {
    path: 'ajout/:id',
    loadChildren: () => import('./lots/ajout/ajout.module').then( m => m.AjoutPageModule)
  },
  {
    path: 'list/lots',
    loadChildren: () => import('./lots/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'uniq/:id',
    loadChildren: () => import('./lots/uniq/uniq.module').then( m => m.UniqPageModule)
  },
  {
    path: 'mesdemandeslot',
    loadChildren: () => import('./lots/mesdemandeslot/mesdemandeslot.module').then( m => m.MesdemandeslotPageModule)
  },
  {
    path: 'mondemandelotuniq/:id',
    loadChildren: () => import('./lots/mondemandelotuniq/mondemandelotuniq.module').then( m => m.MondemandelotuniqPageModule)
  },
  {
    path: 'listdemendemateriel',
    loadChildren: () => import('./listdemendemateriel/listdemendemateriel.module').then( m => m.ListdemendematerielPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
