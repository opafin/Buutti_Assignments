import { dieMaker } from '../../dice'

interface DriverStats {
  name: string
  stats: {
    totalTime: number
    bestLap: number
    hasCrashed: boolean
  }
}

const drivers = ['Henry', 'Hobbit', 'Geralt', 'Ciri', 'Triss']
const laps = 50

async function race(drivers: string[], laps: number): Promise<DriverStats> {
  const driverStats = await Promise.all(
    drivers.map(async (driver) => {
      const driverStats: DriverStats = { name: driver, stats: { totalTime: 0, bestLap: Infinity, hasCrashed: false } }
      const lapsToGo = []
      for (let index = 1; index <= laps; index++) {
        lapsToGo.push(
          raceLap()
            .then((lapTime) => {
              if (driverStats.stats.hasCrashed === false) {
                driverStats.stats.totalTime += lapTime
                if (lapTime < driverStats.stats.bestLap) {
                  driverStats.stats.bestLap = lapTime
                }
              }
            })
            .catch((error) => {
              driverStats.stats.hasCrashed = true
              console.log(driver, error, index + '!')
            })
        )
      }
      await Promise.all(lapsToGo)
      // console.log(driverStats) //log here to also see each individual driver's stats
      return driverStats
    })
  )
  const fastestDriver = driverStats.reduce((fastest, driver) => {
    if (driver.stats.totalTime < fastest.stats.totalTime && driver.stats.hasCrashed === false) {
      fastest = driver
      return fastest
    }
    return fastest
  })
  return fastestDriver
}

async function raceLap(): Promise<number> {
  return new Promise((resolve, reject) => {
    const sides100 = dieMaker(100)
    const driversLuck = sides100()[0]
    const crashes = [42, 69, 34]
    if (driversLuck in crashes) {
      reject('Crashed on lap')
    }
    const sides6 = dieMaker(6)
    const laptime = 19 + sides6()[0]
    resolve(laptime)
  })
}

race(drivers, laps).then((result) => {
  if (result.stats.hasCrashed === false) {
    console.log(result, 'is the fastest!')
  } else console.log('Jaiks, everyone crashed!')
})

// Promise.allSettled() could work to report crashes in the end too
