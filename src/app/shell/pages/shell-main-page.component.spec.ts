import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellMainPageComponent } from './shell-main-page.component';

describe('ShellMainPageComponent', () => {
  let component: ShellMainPageComponent;
  let fixture: ComponentFixture<ShellMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShellMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
