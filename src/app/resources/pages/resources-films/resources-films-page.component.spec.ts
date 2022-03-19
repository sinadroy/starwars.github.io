import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesFilmsPageComponent } from './resources-films-page.component';

describe('ResourcesFilmsComponent', () => {
  let component: ResourcesFilmsPageComponent;
  let fixture: ComponentFixture<ResourcesFilmsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourcesFilmsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesFilmsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
