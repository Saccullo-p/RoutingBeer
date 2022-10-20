import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBirreComponent } from './item-birre.component';

describe('ItemBirreComponent', () => {
  let component: ItemBirreComponent;
  let fixture: ComponentFixture<ItemBirreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemBirreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemBirreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
