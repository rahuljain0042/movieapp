import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieappComponent } from './movieapp.component';

describe('MovieappComponent', () => {
  let component: MovieappComponent;
  let fixture: ComponentFixture<MovieappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
