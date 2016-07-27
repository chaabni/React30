import React, { PropTypes } from 'react'
import './DateBox.css'

const ShortMonths = 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' ')

const padLeft = (n, length) => {
  let s = n.toString()

  while (s.length < length)
    s = '0' + s

  return s
}

class DateBox extends React.Component {
  static propTypes = {
    date: PropTypes.object
  }

  render() {
    const { date } = this.props
    const month = ShortMonths[date.getMonth()]
    const day = padLeft(date.getDate(), 2)

    return (
      <div className="date-box">
        <div className="date-box-month">{month.toUpperCase()}</div>
        <div className="date-box-day">{day}</div>
      </div>
    )
  }
}

export default DateBox
