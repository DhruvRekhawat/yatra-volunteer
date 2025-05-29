export interface Opportunity {
  id: string
  title: string
  location: string
  image: string
  duration: string
  workType: string
  amenities: string[]
  isNew: boolean
  isFavorited: boolean
  tags: string[]
}

export interface FilterCategory {
  id: string
  name: string
  icon: string
  isActive: boolean
}
