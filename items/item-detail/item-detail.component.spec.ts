import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsDetailComponent } from './items-detail.component';

describe('ItemsDetailComponent', () => {
  let component: ItemsDetailComponent;
  let fixture: ComponentFixture<ItemsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
