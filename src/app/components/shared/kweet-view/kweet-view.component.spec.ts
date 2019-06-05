import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KweetViewComponent } from './kweet-view.component';

describe('KweetViewComponent', () => {
  let component: KweetViewComponent;
  let fixture: ComponentFixture<KweetViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KweetViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KweetViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
