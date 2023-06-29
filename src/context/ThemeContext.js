import { createContext, useReducer } from "react";
const ThemeContexttt = createContext();

const initialData = { theme: localStorage.getItem("mtTheme") === null
? "light"
: localStorage.getItem("mtTheme") === "light"
? "light"
: "dark", };
const reducer = (state, action) => {
  switch (action.type) {
  
    case "CHANGE_THEME":
      return { ...state, theme: action.newValue };

    default:
      return state;
  }
};

export function ThemeProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);

  const changeTheme = (newTheme) => {
    localStorage.setItem("mtTheme", newTheme);
    dispatch({ type: "CHANGE_THEME", newValue: newTheme });
  };

  return (
     <ThemeContexttt.Provider value={{ ...firstState,changeTheme}}>
      {children}
     </ThemeContexttt.Provider>
  );
}

export default ThemeContexttt;