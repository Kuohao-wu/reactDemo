import React from 'react'

// controlButton 为纯函数，不包含自身state
const ControlButtons = props => {
  const { activated, onStart, onPause, onReset, onSplit } = props
  if (!activated) {
    return (
      <div>
        <button onClick={onReset}>复位</button>
        <button onClick={onStart}>启动</button>
      </div>
    )
  } else {
    return (
      <div>
        <button onClick={onSplit}>计次</button>
        <button onClick={onPause}>停止</button>
      </div>
    )
  }
}

export default ControlButtons