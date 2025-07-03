import {
  createContext,
  useContext,
  useState,
  type FC,
  type PropsWithChildren,
  type SetStateAction,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: SetStateAction<Theme>) => void;
}

const ThemeContext = createContext({} as ThemeContextProps);

export const useTheme = () => {
  return useContext(ThemeContext);
};

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("dark");

  const value = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider {...{ value }}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
