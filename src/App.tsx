import { useState } from 'react'
import UseCounter from './UseCounter'
import './App.css'
import FormState from './FormState'
import UseReducerExample from './UseReducerExample'
import UseReducerFormExample from './UseReducerFormExample'

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <>
      <UseCounter counter={counter} setCounter={setCounter} />
      <FormState />
      <UseReducerExample />
      <UseReducerFormExample />
    </>
  )
}

export default App
