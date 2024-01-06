import { createContext, useState } from "react";

export const alertContext = createContext();

const AlertState = (props) => {
  const [showalert, setShowalert] = useState({
    alert: false,
    info: { level: "", errors: "" },
  });

  return (
    <alertContext.Provider value={{ showalert, setShowalert }}>
      {props.children}
    </alertContext.Provider>
  );
};

export default AlertState;
