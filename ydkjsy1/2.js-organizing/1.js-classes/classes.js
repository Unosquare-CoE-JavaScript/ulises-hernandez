/**
 * There are two way for organizing JS code:
 *  - Classes
 *  - Modules
 * 
 * 
 * 
 * Classes:
 * Classes are a type of custom data structure that 
 * contains both data and their behaviors. To get a value
 * from a class, the class mus† be instatiated one or more times
 */


// Class definition
class Page {

  constructor(text) {
    this.text = text; //properties
  }

  //Methods or data/property's behavior
  print() {
    console.log(this.text);
  }

}

class Notebook {
  constructor() {
    this.pages = [];
  }

  addPage(text) {
    var page = new Page(text); //Class instantiation
    this.pages.push(page);
  }

  print(){
    for(let page of this.pages) {
      page.print();
    }
  }
}

var mathNotes = new Notebook();
// Multiple class instatiation
mathNotes.addPage("Arithmetic: + - * / ...");
mathNotes.addPage("Trigonometry: sin cos tan ...");
mathNotes.print();



/**
 * Class inheritance:
 * Inheritance is an aspect of class-oriented design where you can define
 * common behaviors and properties contained in a class (super/parent class)
 * and then extend them down to another class (sub/child class)
 */

//Parent class definition
class Publication {
  constructor({title, author, pubDate}) {
    // Parent's properties
    this.title = title;
    this.author = author;
    this.pubDate = pubDate;
  }

  print() {
    console.log(`
      Title: ${this.title}
      By: ${this.author}
      ${this.pubDate}
    `);
  }
}


//Children classes definition
class Book extends Publication {
  constructor(bookDetails) {
    super(...bookDetails); // This call delegates to the parent class' contructor for its initialization
    this.publisher = bookDetails.publisher; // Custom child's properties
    this.ISBN = bookDetails.ISBN;
  }

  print() {
    super.print(); // This call delegates to the parent class' print() method
    console.log(`
      Publisher: ${this.publisher}
      ISBN: ${this.ISBN}
    `);
  }
}

class BlogPost extends Publication {
  constructor(postDetails) {
    super(...postDetails);
    this.URL = postDetails.URL; // Custom child's properties
  }

  print() {
    super.print();
    console.log(this.URL);
  }
}



