import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { DocumentationLayout } from './components/layout/documentation-layout';
import { IntroductionPage } from './pages/introduction-page';
import { InstallationPage } from './pages/installation-page';
import { QuickStartPage } from './pages/quick-start-page';
import { BlogPage } from './pages/blog-page';
import { NotFoundPage } from './pages/not-found-page';
import { lazy } from 'react';

const BasicUsagePage = lazy(() => import('./pages/examples-page/basic-usage-page'));
const HeaderCustomizationPage = lazy(() => import('./pages/examples-page/header-customization-page'));
const ExamplesPage = lazy(() => import('./pages/examples-page/index'));
const PropsPage = lazy(() => import('./pages/api-reference-page/props-page'));
const MethodsPage = lazy(() => import('./pages/api-reference-page/methods-page'));
const CheckboxSelectionPage = lazy(() => import('./pages/examples-page/checkbox-selection-page'));
const CustomCellPage = lazy(() => import('./pages/examples-page/custom-cell-page'));
const ClickRowActionPage = lazy(() => import('./pages/examples-page/click-row-action-page'));
const FreezeColumnPage = lazy(() => import('./pages/examples-page/freeze-column-page'));
const ExpandRowPage = lazy(() => import('./pages/examples-page/expand-row-page'));
const FooterPage = lazy(() => import('./pages/examples-page/footer-page'));
const ComparationPage = lazy(() => import('./pages/examples-page/comparation-page'));
const ServerFilterPage = lazy(() => import('./pages/examples-page/server-filter-page'));
const HeaderGroupingPage = lazy(() => import('./pages/examples-page/header-grouping-page'));
const LargeDatasetPage = lazy(() => import('./pages/examples-page/large-dataset-page'));

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
      { path: 'docs/examples/header-customization', element: <HeaderCustomizationPage /> },
      { path: 'docs/examples/checkbox-selection', element: <CheckboxSelectionPage /> },
      { path: 'docs/examples/custom-render-cell', element: <CustomCellPage /> },
      { path: 'docs/examples/click-row-action', element: <ClickRowActionPage /> },
      { path: 'docs/examples/freeze-column', element: <FreezeColumnPage /> },
      { path: 'docs/examples/expand-row', element: <ExpandRowPage /> },
      { path: 'docs/examples/footer', element: <FooterPage /> },
      { path: 'docs/examples/comparation', element: <ComparationPage /> },
      { path: 'docs/examples/server-filter', element: <ServerFilterPage /> },
      { path: 'docs/examples/header-grouping', element: <HeaderGroupingPage /> },
      { path: 'docs/examples/large-dataset', element: <LargeDatasetPage /> },
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
