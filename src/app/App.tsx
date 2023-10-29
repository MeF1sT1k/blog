import { RouterProvider as Router, createHashRouter } from 'react-router-dom';
import { MainPage, ErrorPage, PostPage } from "../pages";
import "./styles/index.css";

const router = createHashRouter([
    {
        path: '/',
        element: <MainPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/posts/:id',
        element: <PostPage />,
        errorElement: <ErrorPage />,
    }
])

function App() {
    return (
        <div className="page_wrapper">
            <Router router={router} />
        </div>
    );
}

export default App;
