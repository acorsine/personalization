import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Layout8Component } from './layout8.component';

describe('Layout8Component', () => {
  let component: Layout8Component;
  let fixture: ComponentFixture<Layout8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Layout8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Layout8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
