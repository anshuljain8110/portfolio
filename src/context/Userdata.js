import React, { createContext, useState } from 'react';
const Data = createContext()

export default function Userdata(props) {
    const [theme,setTheme] = useState(true)
  return (
    <Data.Provider value={{theme,setTheme}}>
      {props.children}
    </Data.Provider>
  )
}
export { Data }