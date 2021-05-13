import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoinComponent } from './loin.component';

describe('LoinComponent', () => {
  let component: LoinComponent;
  let fixture: ComponentFixture<LoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
