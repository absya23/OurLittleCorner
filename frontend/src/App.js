import { Suspense } from "react";
import Footer from "./components/organisms/footer/Footer";
import Header from "./components/organisms/header/Header";
import RouteConfig from "./config/RouteConfig";

function App() {
  return (
    <>
      {/* <Header></Header> */}
      <Suspense fallback={<></>}>
        <RouteConfig></RouteConfig>
      </Suspense>
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
