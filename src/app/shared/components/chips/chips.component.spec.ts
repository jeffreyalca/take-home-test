import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsComponent } from './chips.component';

describe('ChipsComponent', () => {
  let component: ChipsComponent;
  let fixture: ComponentFixture<ChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });



  it('should be able to delete a chip', () => {
    const expected = ['Jane', 'George'];
    component._chips = ['John', 'Jane', 'George'];
    component.remove('John');
    expect(component._chips).toEqual(expected);
  });

  it('should sort chips by ascending order', () => {
    const expected = ['Andrew', 'Bernard', 'George', 'Xander'];
    component._chips = ['Xander', 'Bernard', 'George', 'Andrew'];
    const sort = 'ascending';
    component.sortChips(sort);
    expect(component._chips).toEqual(expected);
  });

  it('should sort chips by descending order', () => {
    const expected = ['Xander', 'George', 'Bernard', 'Andrew'];
    component._chips = ['Bernard', 'Andrew', 'Xander', 'George'];
    const sort = 'descending';
    component.sortChips(sort);
    expect(component._chips).toEqual(expected);
  });
});
