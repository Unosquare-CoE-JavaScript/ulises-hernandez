/**
 * ES modules is a pattern intruduced in ES6.
 * It is a file-based pattern where each file is a module
 */

function printDetails(title, author, pubDate) {
  console.log(`
    Title: ${title}
    By: ${author}
    ${pubDate}
  `);
}

// The export keyword makes the property or method public
export function create(title, author, pubDate) {
  var publicAPI = {
    print() {
      printDetails(title, author, pubDate);
    }
  }

  return publicAPI;
}

// Continues in 2.es-modules.js