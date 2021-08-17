import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

import { Sort } from './../../enums/sort.enum';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChipsComponent implements OnInit {
  
  public _chips: string[];
  public _activeSort: string;

  public readonly separatorKeysCodes = [ENTER, COMMA] as const;

  public chipsConfig = {
    selectable: true,
    removable: true,
    addOnBlur: true
  };

  constructor() { }

  ngOnInit(): void {
  }

  @Input() set activeSort(activeSort: string) {
    this._activeSort = activeSort;
    if (this._chips && activeSort) {
      this.sortChips(activeSort);
    }
  }

  @Input() set chips(chips: string[]) {
    this._chips = chips || [];

    if (chips && this._activeSort) {
      this.sortChips(this._activeSort);
    }
  }

  public remove(item: string): void {
    const index = this._chips.indexOf(item);

    if (index >= 0) {
      this._chips.splice(index, 1);
    }
  }

  public sortChips(activeSort: string): void {
    
    if (activeSort === Sort.ASC) {
      this.sortByASC(); // Sort by ascending order
    } else {
      this.sortByDESC(); // Sort by descending order
    }
   
  }

  private sortByASC(): void {
    this._chips.sort((a, b) => a.localeCompare(b));
  }

  private sortByDESC(): void {
    this._chips.sort((a, b) => b.localeCompare(a));
  }

}
