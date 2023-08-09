import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Error from "./components/Error.jsx";
import Layout from "./components/Layouts";
import { PrivateRoute } from "./components/PrivateRoute.jsx";
import { PublicRoute } from "./components/PublicRoute.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import Home from "./pages/Home.jsx";
import Quiz from "./pages/Quiz.jsx";
import Result from "./pages/Result.jsx";
import Signin from "./pages/Signin.jsx";
import Signup from "./pages/Signup.jsx";
import "./styles/App.css";

export default function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/signup"
                element={
                  <PublicRoute>
                    <Signup />
                  </PublicRoute>
                }
              />
              <Route
                path="/signin"
                element={
                  <PublicRoute>
                    <Signin />
                  </PublicRoute>
                }
              />
              <Route
                path="/quiz/:id"
                element={
                  <PrivateRoute>
                    <Quiz />
                  </PrivateRoute>
                }
              />
              <Route
                path="/result/:id"
                element={
                  <PrivateRoute>
                    <Result />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<Error />} />
            </Routes>
          </Layout>
        </AuthProvider>
      </Router>
    </>
  );
}
