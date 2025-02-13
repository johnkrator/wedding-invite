import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouForTheRsvpModalComponent } from './thank-you-for-the-rsvp-modal.component';

describe('ThankYouForTheRsvpModalComponent', () => {
  let component: ThankYouForTheRsvpModalComponent;
  let fixture: ComponentFixture<ThankYouForTheRsvpModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThankYouForTheRsvpModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThankYouForTheRsvpModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
