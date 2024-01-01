import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Theme from "./Theme";
import { Home, Places, HouseDisplay } from "./Pages";
import { Header, SocialMedia, Footer } from "./components";

function App() {
  return (
    <Theme>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/places" element={<Places />} />
          <Route path="/places/:id" element={<HouseDisplay />} />
        </Routes>
        <SocialMedia />
        <Footer />
      </BrowserRouter>
    </Theme>
  );
}

export default App;
