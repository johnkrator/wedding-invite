import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NoteFromUsComponent } from './note-from-us.component';

const routes: Routes = [
  {
    path: '',
    component: NoteFromUsComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class NoteFromUsModule {}
