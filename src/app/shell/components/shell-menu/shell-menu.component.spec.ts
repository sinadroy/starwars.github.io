import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellMenuComponent } from './shell-menu.component';

describe('ShellMenuComponent', () => {
  let component: ShellMenuComponent;
  let fixture: ComponentFixture<ShellMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShellMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
