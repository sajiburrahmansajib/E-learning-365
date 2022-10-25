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
          path: '/home',
          loader: () => fetch('http://localhost:5000/courses'),
          element: <Home></Home>
        },
        {
          path: '/blogs',
          element: <Blog></Blog>
        },
        {
          path: '/courses',
          loader: () => fetch('http://localhost:5000/courses'),
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
          loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}/${params.id}`)
        },
        {
          path: '/courses/:id',
          element: <CourseDetails></CourseDetails>,
          loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
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
    </div>
  );
}

export default App;
