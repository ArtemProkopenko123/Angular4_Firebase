import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../shared/item.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  protected itemId: string;
  value: Item;

  private basePath: string = '/items';
  
  constructor( 
    private actRoute: ActivatedRoute,
    private itemSvc: ItemService) 
    { 
    actRoute.params.subscribe(
      param => this.itemId = param.id
    );
  }
  ngOnInit() {
    this.itemSvc.getItem(this.itemId).subscribe(
      res => this.value = res
    )
  }

}
