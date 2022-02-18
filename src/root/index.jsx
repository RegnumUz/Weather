import React from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from '../routes/routes';

const App = () => {
  const content = useRoutes(routes);
  return <>{content}</>;
};

export default App;
