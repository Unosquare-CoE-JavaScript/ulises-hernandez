/**
 * There are two way for organizing JS code:
 *  - Classes
 *  - Modules
 * 
 * 
 * 
 * Modules:
 * Modules group data and behavior into logical units. They also can
 * access the data and behaviors of other modules. Its syntax it's different from classes 
 */

// Module definition
function Publication({title, author, pubDate}) {
  // Unlike class pattern methods/functions and properties can't be public
  // unless they were returned in the factory function 
  var publicAPI = {
    print() {
      console.log(`
        Title: ${title}
        By: ${author}
        ${pubDate}
      `);
    }
  }

  return publicAPI;
}


function Book(bookDetails) {
  // This is a way to extend logic from Publication function
  // In this case pub property is private and can't be accessed
  // from another scope
  var pub = Publication(...bookDetails);
  var publicAPI = {
    print() {
      pub.print();
      console.log(`
        Publisher: ${this.publisher}
        ISBN: ${this.ISBN}
      `);
    }
  }

  return publicAPI
}

function BlogPost(postDetails) {
  var pub = Publication(...postDetails);
  var publicAPI = {
    print() {
      pub.print();
      console.log(this.URL);
    }
  }

  return publicAPI;
}