import { Suspense, lazy } from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from 'react-router-dom';

const Layout = lazy(() => import('./Layout'));
const ReportPage = lazy(() => import('./pages/ReportPage'));
const InvalidPage = lazy(() => import('./pages/InvalidPage'));
const AnalysisPage = lazy(() => import('./pages/AnalysisPage/AnalysisPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Layout />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<div>Loading...</div>}>
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
          <Suspense fallback={<div>Loading...</div>}>
            <AnalysisPage />
          </Suspense>
        ),
      },
      {
        path: 'report',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ReportPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export const Root = () => <RouterProvider router={router} />;
