import { useState } from 'react'
import Button from './components/Button'
import Statistics from './components/Statistics'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleclickGood = () => {
    console.log("Click Good")
    setGood(good + 1)
    setAll(all + 1)
  }
  const handleclickNeutral = () => {
    console.log("Click Neutral")
    setNeutral(neutral + 1)
    setAll(all + 1)
  }
  const handleclickBad = () => {
    console.log("Click Bad")
    setBad(bad + 1)
    setAll(all + 1)
  }

  const average = (good - bad) / all
  const positive = (good * 100) / all

  return (
    <>
      <div>
        <h1>Give Feedback</h1>
      </div>
      <Button onclick={handleclickGood} text={"Good"}/>
      <Button onclick={handleclickNeutral} text={"Neutral"}/>
      <Button onclick={handleclickBad} text={"Bad"}/>
      <div>
        <h1>Statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
      </div>
    </>
  )
}

export default App