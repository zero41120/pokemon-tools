import { Component } from '@angular/core';
import { types } from '../types/poketypes';

@Component({
  selector: 'app-move-selector-main',
  templateUrl: './move-selector-main.component.html',
  styleUrls: [
    './move-selector-main.component.less',
    './type-selector.less',
  ]
})
export class MoveSelectorMainComponent {
  constructor() { }

  public getTypes() {
    return types;
  }

  public getColor(type) {
    return type.colorCode;
  }

  public getSelectedDotColor(type) {
    return type.selected ? type.accentCode : 'transparent';
  }

  public toggleSelect(type) {
    type.selected = !type.selected;
  }
}
