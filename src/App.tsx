import "./App.css";
import { useReveal } from "./components/ui";
import { OrderProvider, OrderModal, CartDrawer } from "./components/shop";
import { TopMarquee, Nav, Hero } from "./components/sections-top.v2";
import {
  Problem,
  Solution,
  Principle,
  Collection,
  Interstitial,
  Binome,
} from "./components/sections-body.v2";
import {
  CountdownSection,
  Testimonials,
  CtaBand,
  Footer,
} from "./components/sections-end.v2";

function App() {
  useReveal();
  return (
    <OrderProvider>
      <TopMarquee />
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Principle />
        <Collection />
        <Interstitial />
        <Binome />
        <CountdownSection />
        <Testimonials />
        <CtaBand />
      </main>
      <Footer />
      <OrderModal />
      <CartDrawer />
    </OrderProvider>
  );
}

export default App;
