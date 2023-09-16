import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },  {
    path: 'inbox',
    loadComponent: () => import('./inbox/inbox.page').then( m => m.InboxPage)
  },

];
