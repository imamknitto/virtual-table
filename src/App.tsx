import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { DocumentationLayout } from './components/layout/documentation-layout';
import { IntroductionPage } from './pages/introduction-page';
import { InstallationPage } from './pages/installation-page';
import { QuickStartPage } from './pages/quick-start-page';
import { BlogPage } from './pages/blog-page';
import { NotFoundPage } from './pages/not-found-page';
import { lazy } from 'react';

const BasicUsagePage = lazy(() => import('./pages/examples-page/basic-usage-page'));
const ExamplesPage = lazy(() => import('./pages/examples-page/index'));
const PropsPage = lazy(() => import('./pages/api-reference-page/props-page'));
const MethodsPage = lazy(() => import('./pages/api-reference-page/methods-page'));
const CheckboxSelectionPage = lazy(() => import('./pages/examples-page/checkbox-selection-page'));
const FilterVisibilityPage = lazy(() => import('./pages/examples-page/filter-visibility-page'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <DocumentationLayout>
        <Outlet />
      </DocumentationLayout>
    ),
    children: [
      { index: true, element: <IntroductionPage /> },
      { path: 'docs/introduction', element: <IntroductionPage /> },
      { path: 'docs/installation', element: <InstallationPage /> },
      { path: 'docs/quick-start', element: <QuickStartPage /> },
      { path: 'docs/examples', element: <ExamplesPage /> },
      { path: 'docs/examples/basic-usage', element: <BasicUsagePage /> },
      { path: 'docs/examples/checkbox-selection', element: <CheckboxSelectionPage /> },
      { path: 'docs/examples/filter-visibility', element: <FilterVisibilityPage /> },
      { path: 'docs/api/props', element: <PropsPage /> },
      { path: 'docs/api/methods', element: <MethodsPage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
