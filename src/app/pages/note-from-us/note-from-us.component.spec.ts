import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteFromUsComponent } from './note-from-us.component';

describe('NoteFromUsComponent', () => {
  let component: NoteFromUsComponent;
  let fixture: ComponentFixture<NoteFromUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteFromUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteFromUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
