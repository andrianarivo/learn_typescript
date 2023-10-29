class Book {
  title: string
  price: number
  dateOfParution: string
  author: string
  theme?: string[]

  constructor(t: string, p: number, dop: string, a: string, th?: string[]) {
    this.title = t
    this.price = p
    this.dateOfParution = dop
    this.author = a
    this.theme = th
  }

  promo() {
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