import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Courses from './Components/Courses/Courses';
import Error from './Components/Error/Error';
import Home from './Components/Home/Home';
import Main from './Layout/Main';

function App() {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/blogs',
          element: <Blog></Blog>
        },
        {
          path: '/courses',
          element: <Courses></Courses>
        },
        {
          path: '*',
          element: <Error></Error>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
