import { lazy, Suspense, useEffect } from 'react';
import { Outlet, Navigate, useRoutes, useNavigate } from 'react-router-dom';

import { getLocalStorage } from 'src/utils/local-storage'; 

import { useAuth } from 'src/useAuth/auth'; 
import ServicePage from 'src/pages/services';

import DashboardLayout from 'src/layouts/dashboard';
// import { Protected } from './components/protected';

export const IndexPage = lazy(() => import('src/pages/app'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const CategoryPage = lazy(() => import('src/pages/category'));

export const LoginPage = lazy(() => import('src/pages/login'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------

export default function Router() {
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = getLocalStorage('token')
    if (!token && !storedToken) {
      navigate('/login')
    } else {
      navigate('/')
    }
  }, [token, navigate])

  const routes = useRoutes([
    {
      element: (
        // <Routes>
        // <Route element={<Protected />} >
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
        // </Route>
        // </Routes>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'services', element: <ServicePage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'category', element: <CategoryPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}


// const Index = () => {
//   <RouterProvider router={router} />
// }