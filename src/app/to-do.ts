//class to map JSON objects
export class ToDo {
    title: string;
    item: string;
    author: string;
    date: string;

    constructor(title, item, author, date){
        this.author = author;
        this.title = title;
        this.item = item;
        this.date = date;
    }
}
