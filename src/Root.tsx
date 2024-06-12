import { Suspense, lazy } from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from 'react-router-dom';

import { CircularProgress } from '@mui/material';
import './assets/styles/index.scss';

const Layout = lazy(() => import('./Layout'));
const ReportPage = lazy(() => import('./pages/ReportPage'));
const InvalidPage = lazy(() => import('./pages/InvalidPage'));
const AnalysisPage = lazy(() => import('./pages/AnalysisPage/AnalysisPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense
        fallback={
          <div className='loader'>
            <CircularProgress />
          </div>
        }>
        <Layout />
      </Suspense>
    ),
    errorElement: (
      <Suspense
        fallback={
          <div className='loader'>
            <CircularProgress />
          </div>
        }>
        <InvalidPage />
      </Suspense>
    ),
    children: [
      {
        index: true,
        loader: () => redirect('analysis'),
      },
      {
        path: 'analysis',
        element: (
          <Suspense
            fallback={
              <div className='loader'>
                <CircularProgress />
              </div>
            }>
            <AnalysisPage />
          </Suspense>
        ),
      },
      {
        path: 'report',
        element: (
          <Suspense
            fallback={
              <div className='loader'>
                <CircularProgress />
              </div>
            }>
            <ReportPage />
          </Suspense>
        ),
      },
    ],
  },

  // {
  //   path: '/',
  //   element: <HomePage />,
  // },
]);

export const Root = () => <RouterProvider router={router} />;
