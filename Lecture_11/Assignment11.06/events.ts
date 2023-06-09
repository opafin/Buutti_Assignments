export interface BuuEvent {
  id: number
  title: string
  description: string
  start: Date
  end: Date
  isAllDay: boolean
}
export const events: BuuEvent[] = [
  {
    id: 1,
    title: 'Ensimmäinen Kesähomma',
    description: '--',
    start: new Date('2023-7-12'),
    end: new Date('2023-7-12'),
    isAllDay: true
  },
  {
    id: 2,
    title: 'Toinen Kesähomma',
    description: '--',
    start: new Date('2023-7-12'),
    end: new Date('2023-7-12'),
    isAllDay: true
  }
]
