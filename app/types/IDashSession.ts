export interface IDashSession {
  id: string
  isNew: boolean
  date: string
  toFollowCount: number
  toFollowProgress?: number
  toLikeCount: number
  toLikeProgress?: number
  toUnfollowCount: number
  toUnfollowProgress?: number
}