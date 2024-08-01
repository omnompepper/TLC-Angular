import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClairetestComponent } from './clairetest.component';

describe('ClairetestComponent', () => {
  let component: ClairetestComponent;
  let fixture: ComponentFixture<ClairetestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClairetestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClairetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
