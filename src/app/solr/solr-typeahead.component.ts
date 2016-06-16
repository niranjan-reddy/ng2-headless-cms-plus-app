import { Component } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass } from '@angular/common';
import { BUTTON_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

import { SELECT_DIRECTIVES } from 'ng2-select/ng2-select';

// webpack html imports
let template = require('./solr-typeahead.component.html');

@Component({
  selector: 'xp-solr-typeahead',
  template: template,
  directives: [SELECT_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES, BUTTON_DIRECTIVES ]
})
export class SolrTypeaheadComponent {
  public items: Array<Object> = [
      {id: 'music', text: 'Music'},
      {id: 'sports', text: 'Sports'},
      {id: 'comedy', text: 'Comedy'}
  ];

  private value: any = {id: 'music', text: 'Music'};
  private _disabledV: string = '0';
  private disabled: boolean = false;

  private get disabledV(): string {
    return this._disabledV;
  }

  private set disabledV(value: string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }

  public selected(value: any): void {
    console.log('Selected value is: ', value);
  }

  public removed(value: any): void {
    console.log('Removed value is: ', value);
  }

  public refreshValue(value: any): void {
    this.value = value;
  }

  public itemsToString(value: Array<any> = []): string {
    return value
      .map((item: any) => {
      return item.text;
    }).join(',');
  }
}
