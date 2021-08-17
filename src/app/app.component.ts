import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public activeSort: string;
  public chips: string[] = [];
  public nameModel: string;

  ngOnInit(): void {

  }

  public addName(): void {
    // don't add a name in the chips if it already exists
    if (!this.chips.includes(this.nameModel)) {

      // Reassignment instead of using push method to 
      // respect OnPush change detection strategy of child component
      this.chips = [...this.chips, this.nameModel];
      this.nameModel = '';
    }
  }

  public onSortChange(event): void {
    console.log(event.target.value);
  }
}
