import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  Outlet
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import ManageQuiz from './pages/quizzes/ManageQuiz/ManageQuiz';
import Quizzes from './pages/quizzes/Quizzes/Quizzes';
import Quiz from './pages/quizzes/Quiz/Quiz';

import { quizLoader } from './util/loaders/quizLoader';
import { quizzesLoader } from './util/loaders/quizzesLoader';
import ErrorBoundary from './components/shared/ErrorBoundary/ErrorBoundary';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route ErrorBoundary={ErrorBoundary}
      element={
        <div
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Outlet />
        </div>
      }
      path="/"
    >
      <Route index element={<Quizzes />} loader={quizzesLoader} />
      <Route path=":id" element={<Quiz />} loader={quizLoader} />
      <Route path="manage">
        <Route path=":id" element={<ManageQuiz />} loader={quizLoader} />
      </Route>
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
