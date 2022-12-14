import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import CourseDetails from './Components/CourseDetails/CourseDetails';
import Courses from './Components/Courses/Courses';
import Error from './Components/Error/Error';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Main from './Layout/Main';
import Enroll from './Routes/Pages/Enroll/Enroll';
import PrivateRoute from './Routes/PrivateRoute/PrivateRoute';

function App() {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://e-learning-365-server.vercel.app/courses'),
          element: <Home></Home>
        },
        {
          path: '/blogs',
          element: <Blog></Blog>
        },
        {
          path: '/courses',
          loader: () => fetch('https://e-learning-365-server.vercel.app/courses'),
          element: <Courses></Courses>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/courses/:id/:id',
          element: <PrivateRoute> <Enroll></Enroll> </PrivateRoute>,
          loader: ({ params }) => fetch(`https://e-learning-365-server.vercel.app/courses/${params.id}/${params.id}`)
        },
        {
          path: '/courses/:id',
          element: <CourseDetails></CourseDetails>,
          loader: ({ params }) => fetch(`https://e-learning-365-server.vercel.app/courses/${params.id}`)
        },
        {
          path: '*',
          element: <Error></Error>
        }
      ]
    }
  ])
  return (
    <div >
      <RouterProvider router={route}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
