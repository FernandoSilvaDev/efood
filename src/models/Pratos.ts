class Pratos {
  description: string
  image: string
  infos: string[]
  grade: number
  title: string
  id: number

  constructor(
    description: string,
    image: string,
    infos: string[],
    grade: number,
    title: string,
    id: number
  ) {
    this.description = description
    this.image = image
    this.infos = infos
    this.grade = grade
    this.title = title
    this.id = id
  }
}

export default Pratos
