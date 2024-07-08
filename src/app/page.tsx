import Navbar from "./components/navbar";
import AboutUs from "./page/about";
import HomePage from "./page/home";
import Support from "./page/client";
import Client from "./page/client";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <HomePage/>
        <AboutUs/>
        <Client/>
      </div>
    </>
  );
}
