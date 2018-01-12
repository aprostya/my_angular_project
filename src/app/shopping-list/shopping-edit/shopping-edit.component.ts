import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() itemCreated = new EventEmitter<{name: string, amount: string}>();
  @Output('itemClear') itemDelete = new EventEmitter<{name: string, amount: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }
  onAddIngridient(nameInput: HTMLInputElement) {
    this.itemCreated.emit ( {
      name: nameInput.value,
      amount: this.serverContentInput.nativeElement.value
    });
  }
  ngOnInit() {
  }
}
