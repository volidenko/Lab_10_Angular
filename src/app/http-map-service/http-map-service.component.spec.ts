import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpMapServiceComponent } from './http-map-service.component';

describe('HttpMapServiceComponent', () => {
  let component: HttpMapServiceComponent;
  let fixture: ComponentFixture<HttpMapServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpMapServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpMapServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
