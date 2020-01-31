import { Component } from '@angular/core';
import { types, PokeType } from '../types/poketypes';

const WHITE = '#b2bec3';
const RED = '#d63031';
const GREEN = '#2ecc71';
const BLACK = '#2d3436';
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
  private selectionCache = {};
  constructor() { }

  public getTypes() {
    return types;
  }

  private getTypeHashTable() {
    return this.getTypes()
      .reduce((a, c: PokeType) => { a[c.name] = c; return a} , {});
  }

  public getColor(type, typesToFilter = null) {
    if (typesToFilter == null) { return type.colorCode; }
    return typesToFilter.map(t => t.name).includes(type.name) ? type.colorCode : WHITE;
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
    const key = propName + types.map(t => t.name).join();
    if (this.selectionCache[key]) { return this.selectionCache[key]; }
    const allFilteredName = Array.from(new Set(
      types
        .map(type => type[propName])
        .flat()
    ));
    const ht = this.getTypeHashTable();
    this.selectionCache[key] = allFilteredName.map(name => ht[name]);
    return this.selectionCache[key];
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

  public getEffectiveTypes() {
    const selected = this.getSelectedTypes();
    const key = 'E' + selected.map(type => type.name);
    if (this.selectionCache[key] == null) {
      const typeEffect = {
        doubles: [], halves: [], zeroes: []
      };
      selected.forEach(type => {
        typeEffect.doubles.push(this.filterTypeProperty('effectiveBy', [type]));
        typeEffect.halves.push(this.filterTypeProperty('ineffectiveBy', [type]));
        typeEffect.zeroes.push(this.filterTypeProperty('noEffectBy', [type]));
      });
      typeEffect.doubles = typeEffect.doubles.flat();
      typeEffect.halves = typeEffect.halves.flat();
      typeEffect.zeroes = typeEffect.zeroes.flat();
      const hashCopy = JSON.parse(JSON.stringify(this.getTypeHashTable()));
      Object.keys(hashCopy).forEach(key => hashCopy[key].effect = 1);
      typeEffect.doubles.forEach(type => hashCopy[type.name].effect *= 2);
      typeEffect.halves.forEach(type => hashCopy[type.name].effect /= 2);
      typeEffect.zeroes.forEach(type => hashCopy[type.name].effect = 0);
      this.selectionCache[key] = hashCopy;
    }
    return this.selectionCache[key]
  }

  public getEffectiveMultiplier(type) {
    const multiplier = this.getEffectiveTypes()[type.name].effect;
    if (multiplier === 0) { return '0'; }
    if (multiplier < 0.125) { return '0.01'; }
    return  { 0.125: '⅛', 0.25: '¼', 0.5: '½'}[multiplier] || multiplier;
  }

  public getEffectiveColor(type) {
    const multiplier = this.getEffectiveMultiplier(type);
    return multiplier >= 2 ? RED :
           multiplier == 1 ? WHITE :
           multiplier == 0 ? BLACK : GREEN;
  }

}
