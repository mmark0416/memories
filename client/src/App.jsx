import { Container } from "@material-ui/core";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

//components
import { Layout } from "./components/Navbar/Layout";
import { Home } from "./components/Home/Home";
import { Auth } from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";

export const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <GoogleOAuthProvider
      clientId={`${import.meta.env.VITE_APP_PUBLIC_GOOGLE_API_TOKEN}`}
    >
      <BrowserRouter>
        <Container maxWidth="lg">
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" exact element={<Navigate to="/posts" />} />
              <Route path="/posts" exact element={<Home />} />
              <Route path="/posts/search" exact element={<Home />} />
              <Route path="/posts/:id" exact element={<PostDetails />} />
              <Route path="/auth" element={!user ? <Auth /> : <Navigate to="/posts" />} />
            </Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};
