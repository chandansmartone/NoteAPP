import { compose } from "redux"

/* eslint-disable no-unused-vars */
const DateFormatter = (dateToFormat) => {
  const date = new Date(dateToFormat)

  const dateParts = date.toString().split(" ");
  const timeString = dateParts[4];

  const [WeekDay,Month,day, year, dayNumber] = date
    .toDateString()
    .split(' ')


  return WeekDay+' '+Month+' '+ day+' '+ year+' at  '+timeString
}

export default DateFormatter
