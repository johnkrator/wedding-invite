import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {EmailTemplateComponent} from './email-template.component';

const routes: Routes = [
  {
    path: '',
    component: EmailTemplateComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EmailTemplateModule {
}
