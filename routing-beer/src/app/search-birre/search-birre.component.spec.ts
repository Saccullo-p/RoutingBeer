import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBirreComponent } from './search-birre.component';

describe('SearchBirreComponent', () => {
  let component: SearchBirreComponent;
  let fixture: ComponentFixture<SearchBirreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBirreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBirreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
