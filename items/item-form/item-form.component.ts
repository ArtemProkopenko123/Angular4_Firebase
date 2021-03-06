import { Component, OnInit, Input } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { ItemService } from '../shared/item.service';
import { Item } from '../shared/item';
@Component({
  selector: 'item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  item: Item = new Item();
  
  constructor(private itemSvc: ItemService) {
     
   }

  createItem() {
    this.itemSvc.createItem(this.item)
    window.location.href = '/items'
  }
  ngOnInit() {
  }

}
