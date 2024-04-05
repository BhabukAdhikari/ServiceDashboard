/* eslint no-use-before-define: 0 */
import { lazy, Suspense, useEffect } from 'react';
import { Outlet, Navigate, useRoutes, useNavigate } from 'react-router-dom';


import { useAuth } from 'src/useAuth/auth';
import ServicePage from 'src/pages/services';
import DashboardLayout from 'src/layouts/dashboard';
import UserPage from 'src/pages/user';


export const IndexPage = lazy(() => import('src/pages/app'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const CategoryPage = lazy(() => import('src/pages/category'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

export default function Router() {
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login')
    } 
  }, [token])

  const publicRoutes = [
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
      element: <Navigate to="/404" />,
    },
  ];

  const privateRoutes = [
    {
      element: (
        <DashboardLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'services', element: <ServicePage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'category', element: <CategoryPage /> },
        { path: 'user', element: <UserPage /> },
      ],
    }
  ];

  const routes = useRoutes(token ? privateRoutes : publicRoutes);

  return routes;
}
