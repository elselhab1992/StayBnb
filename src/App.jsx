import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Theme from "./Theme";
import { Home, Places } from "./Pages";
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
        </Routes>
        <SocialMedia />
        <Footer />
      </BrowserRouter>
    </Theme>
  );
}

export default App;
