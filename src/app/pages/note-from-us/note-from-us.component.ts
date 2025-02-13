import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-note-from-us',
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './note-from-us.component.html',
  styleUrl: './note-from-us.component.css'
})
export class NoteFromUsComponent {
  attending: string = '';
  bringingGuest: string = '';
}
