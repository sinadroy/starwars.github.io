import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesMainPageComponent } from './resources-main-page.component';

describe('ResourcesMainPageComponent', () => {
  let component: ResourcesMainPageComponent;
  let fixture: ComponentFixture<ResourcesMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourcesMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
