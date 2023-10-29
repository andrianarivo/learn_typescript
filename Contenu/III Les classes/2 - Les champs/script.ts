class Book {

  private bookId = 88
  readonly libraryName = "The Book Shelf"

  constructor(
      public title: string,
      public price: number,
      public dateOfParution: string,
      public author: string,
      public theme?: string[],
  ) {

  }

  promo() {
    console.log('ID', this.bookId)
    console.log('Name', this.libraryName)
    return this.price * 0.5
  }
}

const book1 = new Book("The Great Gatsby", 15, "1925", "F. Scott Fitzgerald")
console.log(book1)
console.log(book1.promo())

const addToShelter = (obj: Book) => {
  console.log(`Adding ${obj.title} to the shelter`)
  console.log(obj)
}

const nana = new Book('Nana', 10, '1880', 'Emile Zola', ['romance', 'drama'])
addToShelter(nana)

let onlyBook: Book[] = []
onlyBook.push(book1)
onlyBook.push(nana)
console.log(onlyBook)