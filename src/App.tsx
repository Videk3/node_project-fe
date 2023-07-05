import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Register from "./pages/Register.tsx";
import Login from "./pages/Login.tsx";
import Wrapper from "./components/Wrapper.tsx";
import Home from "./pages/Home.tsx";
import NewLunch from "./pages/NewLunch.tsx";
import MostVotesToday from "./pages/MostVotesToday.tsx";
import UpdateLunch from "./pages/UpdateLunch.tsx";

function App() {

    interface PrivateRouteProps {
        element: React.ElementType;
    }

    const PrivateRoute: React.FC<PrivateRouteProps> = ({ element: Element, ...rest }) => {
        if (localStorage.getItem('isLoggedIn') == 'false') {
            return <Navigate to="/login" />;
        }
        return <Element {...rest} />;
    };

    return (
        <>
            <Wrapper>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<PrivateRoute element={Home} />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/create" element={<PrivateRoute element={NewLunch} />} />
                        <Route path="/mostvotes" element={<PrivateRoute element={MostVotesToday} />} />
                        <Route path="/updatelunch/:id" element={<PrivateRoute element={UpdateLunch} />} />
                    </Routes>
                </BrowserRouter>
            </Wrapper>
        </>
    );
}

export default App;
