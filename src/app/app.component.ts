import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  
  public title = 'take-home-test';

  public activeSort: string;
  public chips: string[] = [];
  public nameModel: string;

  ngOnInit(): void {
    this.activeSort = '';
  }

  public addName(): void {
    // don't add a name in the chips if it already exists
    if (!this.chips.includes(this.nameModel)) {

      this.chips = [...this.chips, this.nameModel];
      this.nameModel = '';
    }
  }

  public onSortChange(event): void {
    this.activeSort = event.target.value as string;
  }
}
