import { useEffect, useRef } from "react";
import './UseRefExample2.css'
import CustomInput from "./components/CustomInput";

const UseRefExample2 = () => {
//   const myRef = useRef<HTMLInputElement | null>(null);
  const myRef2 = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // myRef.current?.focus();
    myRef2.current?.focus();
  }, []);
  return (
    <div>
      {/* <input ref={myRef} type="text" /> */}
      <CustomInput className="input-bg" ref={myRef2} />
    </div>
  );
};

export default UseRefExample2;
