import { ReactNode, createContext, useState } from "react";

export type TThemeContext = { 
    dark: boolean;
    setDark: React.Dispatch<React.SetStateAction<boolean>>;
 }

export const ThemeContext = createContext<TThemeContext | undefined> (undefined);

type TThemeComtextProps ={
    children: ReactNode,
}
const ThemeProvider = ({children} : TThemeComtextProps) => {
    const [dark, setDark] = useState(false);
    const values = {
        dark,
        setDark
    }
    return (
        <div>
            <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
        </div>
    );
};

export default ThemeProvider;