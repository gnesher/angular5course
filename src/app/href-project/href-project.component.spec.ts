import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrefProjectComponent } from './href-project.component';

describe('HrefProjectComponent', () => {
  let component: HrefProjectComponent;
  let fixture: ComponentFixture<HrefProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrefProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrefProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
