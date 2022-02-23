/**
 * 1.1 Single Responsability
 * 
 * A class single primary responsability.
 * It is not recommended add more than one
 * resposability to a class.
 * 
 */


// In this class Journal is just incharge of managing
// entries (add and remove) and it has no more responsabilities
class Journal {
  constructor() {
    this.entries = {};
  }

  addEntry(text) {
    let c = ++Journal.count;
    let entry = `${c}: ${text}`;
    this.entries[c] = entry;
    return c;
  }

  removeEntry(index) {
    delete this.entries[index];
  }

  toString() {
    return Object.values(this.entries).join('\n');
  }

}
Journal.count = 0;

// PersistenceManager is just in charge of persistance Journal's entries
// this implemetation could be added to Journal class, however that wouls
// break this principle
class PersistenceManager {

  constructor() {
    this.store = {};
  }

  save(journal, filename) {
    this.store[filename] = journal.toString();
  }
}

let j = new Journal();
j.addEntry('I cried today.');
j.addEntry('I ate a bug.');
console.log(j.toString());

let p = new PersistenceManager();
let filename = 'journal.txt';
p.save(j, filename);

