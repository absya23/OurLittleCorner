import axios from "axios";
import { useEffect, useState } from "react";
import { createContext, useContext } from "react";

const TypesContext = createContext();
function TypesProvider(props) {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    // test
    axios
      .get("http://localhost:8000/api/types")
      .then((res) => {
        setTypes(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <TypesContext.Provider
      value={{ types, setTypes }}
      {...props}
    ></TypesContext.Provider>
  );
}

function useTypes() {
  const context = useContext(TypesContext);
  if (typeof context === "undefined")
    throw new Error("useTypes must be used within a TypesProvider");
  return context;
}

export { TypesProvider, useTypes };
