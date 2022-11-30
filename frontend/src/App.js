import { Suspense } from "react";
import RouteConfig from "./config/RouteConfig";
import "boxicons/css/boxicons.min.css";
import { CartProvider } from "./context/cartContext";

function App() {
  return (
    <>
      <CartProvider>
        <Suspense fallback={<></>}>
          <RouteConfig></RouteConfig>
        </Suspense>
      </CartProvider>
    </>
  );
}

export default App;
