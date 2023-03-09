import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conocimientos2Component } from './conocimientos2.component';

describe('Conocimientos2Component', () => {
  let component: Conocimientos2Component;
  let fixture: ComponentFixture<Conocimientos2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Conocimientos2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Conocimientos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
