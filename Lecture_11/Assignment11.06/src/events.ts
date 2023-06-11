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
    description: 'laituri pihakeinu metsä kalastus riippumatto pihakeinu muurahainen metsä hyttynen koirankakka',
    start: new Date('2023-7-12-12:00'),
    end: new Date('2023-7-12-12:00'),
    isAllDay: false
  },
  {
    id: 2,
    title: 'Toinen Kesähomma',
    description: 'kasvihuone hyttynen verkko telttailu lintujenlaulu marjastus luonto telttailu huvimaja marjastus',
    start: new Date('2023-7-12'),
    end: new Date('2023-7-12'),
    isAllDay: true
  },
  {
    id: 3,
    title: 'Kolmas Kesähomma',
    description: 'kasvihuone hyttynen verkko telttailu lintujenlaulu marjastus luonto telttailu huvimaja marjastus',
    start: new Date('2023-7-12-12:00'),
    end: new Date('2024-9-20-19:00'),
    isAllDay: false
  }
]
