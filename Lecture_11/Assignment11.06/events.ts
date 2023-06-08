export interface BuuEvent {
  id: number
  title: string
  description: string
  date: Date
  isAllDay: boolean
}
export const events: BuuEvent[] = [
  {
    id: 1,
    title: 'Ensimmäinen Kesähomma',
    description: '--',
    date: new Date('2023-7-12'),
    isAllDay: true
  },
  {
    id: 2,
    title: 'Toinen Kesähomma',
    description: '--',
    date: new Date('2023-7-12'),
    isAllDay: true
  },
  {
    id: 3,
    title: 'Kolmas Kesähomma',
    description: '--',
    date: new Date('2023-7-12-12:00'),
    isAllDay: false
  }
]
