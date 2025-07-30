import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { AssetFlow } from './pages/dashboard/asset-flow/asset-flow';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        component: AssetFlow, // home page (default)
      },
      {
        path: 'dashboard',
        component: AssetFlow, // also route dashboard to asset-flow
      },
      {
        path: 'asset-flow',
        component: AssetFlow,
      },
    ],
  },
  { path: '**', component: NotFound },
];
