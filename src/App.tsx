import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DocumentationLayout } from './components/layout/documentation-layout';
import { IntroductionPage } from './pages/introduction-page';
import { InstallationPage } from './pages/installation-page';
import { QuickStartPage } from './pages/quick-start-page';
import { BlogPage } from './pages/blog-page';
import { NotFoundPage } from './pages/not-found-page';
import { lazy, Suspense } from 'react';
import ContentLoading from './components/content-loading';
import { useRoutePreloader } from './hooks/use-route-preloader';
import { ErrorFallback } from './components/error-boundary';

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
const ServerFilterPage = lazy(() => import('./pages/examples-page/server-filter-page'));
const HeaderGroupingPage = lazy(() => import('./pages/examples-page/header-grouping-page'));
const LargeDatasetPage = lazy(() => import('./pages/examples-page/large-dataset-page'));
const ScrollingPage = lazy(() => import('./pages/examples-page/scrolling-page'));
const ExplorePage = lazy(() => import('./pages/explore-page'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<ContentLoading />}>
        <DocumentationLayout />
      </Suspense>
    ),
    errorElement: <ErrorFallback />,
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
      { path: 'docs/examples/server-filter', element: <ServerFilterPage /> },
      { path: 'docs/examples/header-grouping', element: <HeaderGroupingPage /> },
      { path: 'docs/examples/large-dataset', element: <LargeDatasetPage /> },
      { path: 'docs/examples/scrolling', element: <ScrollingPage /> },
      { path: 'docs/api/props', element: <PropsPage /> },
      { path: 'docs/api/methods', element: <MethodsPage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'explore', element: <ExplorePage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

const App = () => {
  // Define routes to preload
  const routesToPreload = {
    'basic-usage': () => import('./pages/examples-page/basic-usage-page'),
    'examples-index': () => import('./pages/examples-page/index'),
    'props-page': () => import('./pages/api-reference-page/props-page'),
    'methods-page': () => import('./pages/api-reference-page/methods-page'),
    'header-customization': () => import('./pages/examples-page/header-customization-page'),
    'checkbox-selection': () => import('./pages/examples-page/checkbox-selection-page'),
  };

  // Use route preloader hook
  useRoutePreloader(routesToPreload, {
    delay: 1500,
    preloadOnHover: true,
  });

  return <RouterProvider router={router} />;
};

export default App;
