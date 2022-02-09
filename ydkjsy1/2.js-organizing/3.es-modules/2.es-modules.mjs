// We can import an external module using the keyword 'import'
// We use the keyword 'as' to create an alias for the imported module
import {create as createPub } from './1.es-modules.mjs'

function printDetails(pub, URL) {
    pub.print();
    console.log(URL);
}

export function create(title, author, pubDate, URL) {
    // Creating an instace of external module
    var pub = createPub(title, author, pubDate);

    var publicAPI = {
        print() {
            printDetails(pub, URL);
        }
    }

    return publicAPI;
}