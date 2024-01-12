import { forwardRef } from "react";

type TCustomInputProps ={
    className: string,
}

const CustomInput = forwardRef<HTMLInputElement, TCustomInputProps>(({className}, inputRef) => {
    return (
        <input className={className} ref={inputRef} type="text" name="" id="" />
    );
});

export default CustomInput;