import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layouts";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateOutlet from "./outlet/PrivateOutlet";
import PublicOutlet from "./outlet/PublicOutlet";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import "./styles/App.css";

export default function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/*" element={<PrivateOutlet />}>
                <Route path="quiz/:id" element={<Quiz />} />
                <Route path="result/:id" element={<Result />} />
              </Route>

              <Route path="/*" element={<PublicOutlet />}>
                <Route path="signup" element={<Signup />} />
                <Route path="signin" element={<Signin />} />
              </Route>
            </Routes>
          </Layout>
        </AuthProvider>
      </Router>
    </>
  );
}
