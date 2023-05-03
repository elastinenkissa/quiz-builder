import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  Outlet
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Quizzes, {
  loader as quizzesLoader
} from './pages/quizzes/Quizzes/Quizzes';
import Quiz, { loader as quizLoader } from './pages/quizzes/Quiz/Quiz';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Outlet />
        </div>
      }
      path="/"
    >
      <Route index element={<Quizzes />} loader={quizzesLoader} />
      <Route path=":id" element={<Quiz />} loader={quizLoader} />
    </Route>
  )
);

const App = () => {
  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  );
};

export default App;
