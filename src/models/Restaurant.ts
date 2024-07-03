class Restaurant {
  name: string
  description: string
  category: string
  infos: string[]
  image: string
  id: number
  rating: string
  to: string

  constructor(
    name: string,
    description: string,
    category: string,
    infos: string[],
    image: string,
    id: number,
    rating: string,
    to: string
  ) {
    this.name = name
    this.description = description
    this.category = category
    this.infos = infos
    this.image = image
    this.id = id
    this.rating = rating
    this.to = to
  }
}

export default Restaurant
