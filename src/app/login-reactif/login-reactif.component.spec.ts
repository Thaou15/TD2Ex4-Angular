import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginReactifComponent } from './login-reactif.component';

describe('LoginReactifComponent', () => {
  let component: LoginReactifComponent;
  let fixture: ComponentFixture<LoginReactifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginReactifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginReactifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
