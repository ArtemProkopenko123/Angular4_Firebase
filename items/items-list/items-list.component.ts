import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable} from 'angularfire2/database';
import { ItemService } from '../shared/item.service';
import { Item } from '../shared/item';
@Component({
  selector: 'items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  items: FirebaseListObservable<Item[]>;

  constructor(private itemSvc: ItemService) {
    
   }

  ngOnInit() {
    this.items = this.itemSvc.getItemsList({limitToLast: 10});
  }
  
  deleteItems() {
    let conf = confirm("Are you sure ?");
    if (conf){  this.itemSvc.deleteAll()}
  }

}
