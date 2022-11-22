import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListboxComponent } from './listbox.component';

describe('ListboxComponent', () => {
  let component: ListboxComponent;
  let fixture: ComponentFixture<ListboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
