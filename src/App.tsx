import { useState } from 'react'
import UseCounter from './UseCounter'
import './App.css'
import FormState from './FormState'
import UseReducerExample from './UseReducerExample'
import UseReducerFormExample from './UseReducerFormExample'
import UseEffectExample from './UseEffectExample'

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <>
      <UseCounter counter={counter} setCounter={setCounter} />
      <FormState />
      <UseReducerExample />
      <UseReducerFormExample />
      <UseEffectExample />
    </>
  )
}

export default App
