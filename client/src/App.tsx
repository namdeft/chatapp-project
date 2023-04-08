import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ChatPage from './pages/ChatPage';
import LoginPage from './components/Login';
import RegisterPage from './components/Register';

const router = createBrowserRouter([
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/register',
        element: <RegisterPage />,
    },
    {
        path: '/chats',
        element: <ChatPage />,
    },
]);

const App: React.FC = () => {
    return (
        <div className='App'>
            <RouterProvider router={router} />
        </div>
    );
};

export default App;
