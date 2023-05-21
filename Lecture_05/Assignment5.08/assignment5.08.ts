import fs from 'fs'

const forecastData = fs.readFileSync('forecast_data.json', 'utf-8')
console.log(forecastData)

const JSObject = JSON.parse(forecastData)

JSObject['temperature'] = 30

const JSONString = JSON.stringify(JSObject)

fs.writeFileSync('newForecastData.json', JSONString, 'utf-8')
