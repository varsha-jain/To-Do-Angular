import { Component, OnInit } from '@angular/core';
import { ToDo } from '../to-do';
import { ItemListComponent } from '../item-list/item-list.component';
import { FormsModule } from '@angular/forms';
import {directive} from "@angular/core/src/render3/instructions";


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {

  title: string;
  item: string;
  author: string;
  date: string;
  itemListComponent :ItemListComponent;
  itemList: Array<ToDo>;
  

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
    if(this.title==null || this.item==null){
      alert("empty values not allowed");
    }else{
    //this.itemListComponent.itemList.push(new ToDo(this.title,this.item,this.author,this.date));
this.itemList.push(new ToDo(this.title,this.item,this.author,this.date));
     console.log("the length " +this.itemListComponent.itemList.length);
     console.log(this.itemListComponent.itemList);
    }

  }


  ngOnInit() {
  }

}


function Display(){



}






 /* var title =item.title.value;
  //validation to check if the title is empty or not
  if (title.length === 0 || !title.trim()) {
    alert("Title must be filled out");
    return false;
  }
  var item = document.getElementById("form-add-todo").title;
  if (item.length === 0 || !item.trim()) {
    alert("item must be filled out");
    return false;
  }
  var author = item.author.value;

  var date = document.getElementById("date-input");
  //var values = Object.values(actual_JSON);
  var flag = false;
*/
 /* for (var key in values) {

    //validation to check if the item already exists in the task list
    if (values[key].title == title.trim()
      && values[key].item == item.trim()
      && values[key].author == author.trim()
      && values[key].date == date) {
      alert("task already exists!");
      flag = true;
      document.getElementById("display-to-do").reset();
      return false;
    } else {

      flag = false;
    }
  }*/

  //if the item doesnt exist then add the item to the list
 // if (flag == false) {



//  }

  //clear all the fields after adding new task
  //document.getElementById("form-add-todo").reset();
  //display(actual_JSON);


