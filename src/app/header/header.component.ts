import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent {
  @Output()recipeNavigation = new EventEmitter<string>();

  onSelect(val: string) {
    this.recipeNavigation.emit(val);
    console.log('click onselect');
  }
}
