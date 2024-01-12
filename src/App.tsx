import { useContext, useState } from "react";
import UseCounter from "./UseCounter";
import "./App.css";
import FormState from "./FormState";
import UseReducerExample from "./UseReducerExample";
import UseReducerFormExample from "./UseReducerFormExample";
import UseEffectExample from "./UseEffectExample";
import UseRefExample from "./UseRefExample";
import UseRefExample2 from "./UseRefExample2";
import { TThemeContext, ThemeContext } from "./context/ThemeProvider";
import { MenuItem, MenuList } from "./components/Menu";
import UserContainer from "./UserContainer";

function App() {
  const [counter, setCounter] = useState(0);
  const { dark, setDark } = useContext(ThemeContext) as TThemeContext;
  console.log(dark);
  return (
    <>
      {/* <MenuList>
        <MenuItem />
      </MenuList>
      <div className={dark ? "divCustomDark" : "divCustomWhite"}></div>
      <button onClick={() => setDark(!dark)}>Toggle</button>
      <UseCounter counter={counter} setCounter={setCounter} />
      <FormState />
      <UseReducerExample />
      <UseReducerFormExample />
      <UseEffectExample />
      <UseRefExample />
      <UseRefExample2 /> */}

      <UserContainer />
    </>
  );
}

export default App;
