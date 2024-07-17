import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({text, value}) => {
  if (text==='positive') 
    return (
      <>
        <td>{text}</td>
        <td>{value} %</td>
      </>
    )
  return (
    <>
      <td>{text}</td>
      <td>{value}</td>
    </>
  )
} 

const Statistics = (props) => { 
  const total = props.good + props.neutral + props.bad
  const average = ((props.good - props.bad) / total).toFixed(1)
  const positive = ((props.good / total) * 100).toFixed(1)

  if (props.good > 0 || props.bad > 0 || props.neutral > 0){
    return (
      <table>
        <tbody>
          <tr>
            <StatisticLine text='good' value={props.good}/>
          </tr>
          <tr>
            <StatisticLine text='neutral' value={props.neutral} />
          </tr>
          <tr>
            <StatisticLine text='bad' value={props.bad} />
          </tr>
          <tr>
            <StatisticLine text='all' value={total} />
          </tr>
          <tr>
            <StatisticLine text='average' value={average} />
          </tr>
          <tr>
            <StatisticLine text='positive' value={positive} />
          </tr>
        </tbody>
      </table>
    )
  }

  return (
    <p>No feedback given</p>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>give feedback</h1>

      <Button
        onClick = {() => setGood(good + 1)}
        text = 'good'
      />

      <Button
        onClick={() => setNeutral(neutral + 1)}
        text = 'neutral'
      />

      <Button
        onClick = {() => setBad(bad + 1)}
        text = 'bad'
      />

      <h1>Statistics</h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </>
  )
}

export default App