import { Component, OnInit } from '@angular/core';
import { ToDo } from '../to-do';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  itemList: Array<ToDo>;
  title: string;
  item: string;
  author: string;
  date: string;
  itemListComponent :ItemListComponent;

  constructor() {

    this.itemList = [
      new ToDo('Take Test','take web design test','varsha','2017-02-19'),
      new ToDo('Drive','drive car','varsha','2017-02-20'),
      new ToDo('cook','cook dinner','varsha','2017-02-20'),
      new ToDo('assignment','complete web design assignment','ramya','2017-02-20')
    ];
   }


  Add(title, item, author, date)
  {
    this.title = title;
    this.item = item;
    this.author = author;
    this.date = date;
    this.itemListComponent=new ItemListComponent();
    console.log("the title : " + this.title);
    console.log("the length " +this.itemListComponent.itemList.length);

    this.itemListComponent.itemList.push(new ToDo(this.title,this.item,this.author,this.date));

    console.log("the length " +this.itemListComponent.itemList.length);
    console.log(this.itemListComponent.itemList);

  }


  ngOnInit() {
  }

}
