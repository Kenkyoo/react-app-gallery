import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Images from "./pages/images/images";
import Image from "./pages/images/image";
import Videos from "./pages/videos/videos";
import Video from "./pages/videos/video";
import Home from "./pages/home/home";
import Search from "./pages/search/advancedSearch";
import AppAppBar from "./navigation/appBar";
import ProfilePage from "./pages/profile/profilePage";
import AuthHandler from "./context/authHandler";
import Favorites from "./pages/favorites/favorites";
import Header from "./components/header";
import Footer from "./navigation/footer";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import DarkTheme from "./theme/darkTheme";

function App() {
  const location = useLocation();
  const excludedRoutes =
    location.pathname.startsWith("/images") ||
    location.pathname.startsWith("/videos") ||
    location.pathname.startsWith("/profile") ||
    location.pathname.startsWith("/favorites") ||
    location.pathname.startsWith("/search");
  return (
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline />
      <div className="App">
        <AuthHandler />
        <AppAppBar />
        <Container
          maxWidth="lg"
          component="main"
          sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }}
        >
          {!excludedRoutes && <Header />}
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/images/:id" element={<Image />}></Route>
            <Route path="/videos/:id" element={<Video />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/images" element={<Images />}></Route>
            <Route path="/videos" element={<Videos />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/profile" element={<ProfilePage />}></Route>
            <Route path="/favorites" element={<Favorites />}></Route>
          </Routes>
          {!excludedRoutes && <Footer />}
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
