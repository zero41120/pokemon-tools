import { Component } from '@angular/core';
import { types, PokeType } from '../types/poketypes';

@Component({
  selector: 'app-move-selector-main',
  templateUrl: './move-selector-main.component.html',
  styleUrls: [
    './move-selector-main.component.less',
    './type-selector.less',
    './tag.less',
  ]
})
export class MoveSelectorMainComponent {
  constructor() { }

  public getTypes() {
    return types;
  }

  private getTypeHashTable() {
    return this.getTypes()
      .reduce((a, c: PokeType) => { a[c.name] = c; return a} , {});
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

  private getSelectedTypes() {
    return this.getTypes().filter(type => type.selected);
  }

  private filterTypeProperty(propName: string, types = this.getSelectedTypes()) {
    const allFilteredName = Array.from(new Set(
      types
        .map(type => type[propName])
        .flat()
    ));
    const ht = this.getTypeHashTable();
    return allFilteredName.map(name => ht[name]);
  }
  public getStrengthTypes() {
    return this.filterTypeProperty('strengths');
  }
  public getWeaknessTypes() {
    return this.filterTypeProperty('weaknesses');
  }
  public getImmunesTypes() {
    return this.filterTypeProperty('immunes');
  }

  public resetTypes() {
    this.getTypes().forEach(t => t.selected = false);
  }
}
