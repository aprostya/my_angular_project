import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import {Ingredient} from '../../shared/ingridient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() itemCreated = new EventEmitter<Ingredient>();
  @Output('itemClear') itemDelete = new EventEmitter<Ingredient>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  @ViewChild('amountContentInput') amountInputRef: ElementRef;

  constructor() { }
  onAddIngridient() {
    const newAmount = this.serverContentInput.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(newAmount, ingAmount);
    this.itemCreated.emit(newIngredient);
    }
    onDeleteItem() {
      const newAmount = this.serverContentInput.nativeElement.value;
      const ingAmount = this.amountInputRef.nativeElement.value;
      const newIngredient = new Ingredient(newAmount, ingAmount);
      this.itemDelete.emit(newIngredient);
      console.log('I am trying to delete');
    }
  ngOnInit() {
  }
}
