import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemples } from './exemples';

describe('Exemples', () => {
  let component: Exemples;
  let fixture: ComponentFixture<Exemples>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exemples],
    }).compileComponents();

    fixture = TestBed.createComponent(Exemples);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
