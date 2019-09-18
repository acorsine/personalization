import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Layout7Component } from './layout7.component';

describe('Layout7Component', () => {
  let component: Layout7Component;
  let fixture: ComponentFixture<Layout7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Layout7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Layout7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
