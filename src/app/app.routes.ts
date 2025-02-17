import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LayoutComponent} from './components/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {
        path: 'home',
        loadChildren: () => import('../app/pages/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'note',
        loadChildren: () => import('../app/pages/note-from-us/note-from-us.module').then(m => m.NoteFromUsModule),
      },
      {
        path: 'email',
        loadChildren: () => import('../app/pages/email-template/email-template.module').then(m => m.EmailTemplateModule),
      },
      {
        path: '**', redirectTo: 'home',
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {
}
