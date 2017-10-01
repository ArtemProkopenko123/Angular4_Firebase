import { Injectable } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { AngularFireDatabase,FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';
import { Item } from './item';

@Injectable()
export class ItemService {

  private basePath: string = '/items';

  items: FirebaseListObservable<Item[]> = null; // list of objects
  item: FirebaseObjectObservable<Item> = null; // single object
  ItemsKey: number;
  constructor(private db: AngularFireDatabase) {}

  getItemsList(query={}): FirebaseListObservable<Item[]> {
    this.items = this.db.list(this.basePath, {
      query: query
    });
    this.getItemsCount();
    return this.items
  }
  getItemsCount(){
    //Create a new query because getItemsList() have a query params 
    this.db.list(this.basePath).subscribe(snapshot => {
      try {this.ItemsKey = Number( snapshot[snapshot.length - 1].$key);
      } catch(e) {
        this.ItemsKey = snapshot.length;
      }
    })
  }
  // Return a single observable item
  getItem(key: string): FirebaseObjectObservable<Item> {
    const itemPath =  `${this.basePath}/${key}`;
    this.item = this.db.object(itemPath)
    return this.item 
  }
  createItem(item: Item): void  {
  this.items.set(`${this.ItemsKey + 1}`, item)
     .catch(error => this.handleError(error))
     this.getItemsCount();
  }
  // Update item
  updateItem(key: string, value: any): void {
    this.items.update(key, value)
      .catch(error => this.handleError(error))
    this.getItemsCount();
  }
  // Deletes a single item
  deleteItem(key: string): void {
    this.items.remove(key)
        .catch(error => this.handleError(error))
    this.getItemsCount();
  }
  // Deletes the entire list of items
  deleteAll(): void {
    this.items.remove()
        .catch(error => this.handleError(error))
    this.getItemsCount();
  }
 //  error handling 
 private handleError(error) {
   console.log(error)
 }
}