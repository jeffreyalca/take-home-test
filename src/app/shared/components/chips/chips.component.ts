import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChipsComponent implements OnInit {

  @Input() public chips: string[] = [];
  public readonly separatorKeysCodes = [ENTER, COMMA] as const;

  public chipsConfig = {
    selectable: true,
    removable: true,
    addOnBlur: true
  };

  constructor() { }

  ngOnInit(): void {
  }

  public remove(item: string): void {
    const index = this.chips.indexOf(item);

    if (index >= 0) {
      this.chips.splice(index, 1);
    }
  }

}
