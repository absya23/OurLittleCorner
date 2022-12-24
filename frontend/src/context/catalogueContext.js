import axios from "axios";
import { useEffect, useState } from "react";
import { createContext, useContext } from "react";

const CatalogueContext = createContext();
function CatalogueProvider(props) {
  const [catalogue, setCatalogue] = useState([]);

  useEffect(() => {
    // test
    axios
      .get("http://localhost:8000/api/catalogue")
      .then((res) => {
        setCatalogue(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <CatalogueContext.Provider
      value={{ catalogue, setCatalogue }}
      {...props}
    ></CatalogueContext.Provider>
  );
}

function useCatalogue() {
  const context = useContext(CatalogueContext);
  if (typeof context === "undefined")
    throw new Error("useCatalogue must be used within a CatalogueProvider");
  return context;
}

export { CatalogueProvider, useCatalogue };
