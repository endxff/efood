class Item {
  image: string
  title: string
  description: string
  id: number

  constructor(image: string, title: string, description: string, id: number) {
    this.id = id
    this.image = image
    this.title = title
    this.description = description
  }
}

export default Item
