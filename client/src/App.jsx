import { Container } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import { Layout } from "./components/Navbar/Layout";
import { Home } from "./components/Home/Home";
import { Auth } from "./components/Auth/Auth";
import { GoogleOAuthProvider } from "@react-oauth/google";

export const App = () => {
  return (
    <GoogleOAuthProvider
      clientId={`${import.meta.env.VITE_APP_PUBLIC_GOOGLE_API_TOKEN}`}
    >
      <BrowserRouter>
        <Container maxWidth="lg">
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" exact element={<Home />} />
              <Route path="/auth" element={<Auth />} />
            </Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};
