import React from 'react'
import { ms2Time } from '../utils/helper'
const SplitTimes = ({ timeList }) => {
  return (
    <ul style={{listStyle: 'none', padding: '10px', margin: 0}}>
      {timeList.map(item => (<li key={item}>{ms2Time(item)}</li>))}
    </ul>
  )
}

export default SplitTimes