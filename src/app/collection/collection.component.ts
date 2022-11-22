import { Component } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent {

  selection = new SelectionModel<any>(
    true, // multiple selection or not
    [] // initial selected values
  );

  optionList = [
    { id: 1, title: 'Wake up at ...' },
    { id: 2, title: 'Taking a shower' },
    { id: 3, title: 'Getting Dress' },
    { id: 4, title: 'Prepare/eat breakfast' },
    { id: 5, title: 'Go to Work' },
  ];

  get allSelected(): boolean {
    return (
      !!this.optionList.length &&
      this.selection.selected.length === this.optionList.length
    );
  }

  toggleMasterSelection() {
    if (this.allSelected) {
      this.selection.clear();
    } else {
      this.selection.select(...this.optionList);
    }
  }
}
