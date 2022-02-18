import Layout from '../components/Layout/Layout.jsx';
import Home from '../pages/Home/index.jsx'

import App from '../pages/Search/App.js'

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/app',
        element: <App />,
      },
    ],
  },
];
