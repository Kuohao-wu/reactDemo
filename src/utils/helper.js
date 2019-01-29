const padLeft = (num, digits) => {
  const padLeftLen = '0'.repeat(digits)
  return (padLeftLen + num).slice(-digits)
}
const ms2Time = (milliseconds) => {
  let time = milliseconds
  const ms = milliseconds % 1000
  time = (milliseconds - ms) / 1000
  const seconds = time % 60
  time = (time - seconds) / 60
  const minutes = time % 60
  const hours = (time - minutes) / 60

  const result = `${padLeft(hours, 2)}:${padLeft(minutes, 2)}:${padLeft(seconds, 2)}.${padLeft(ms, 3)}`
  return result
}
export {
  ms2Time
}
