import React, { lazy, Suspense } from 'react';
import { ProductsProps } from './Products';

const LazyProducts = lazy(() => import('./Products'));

const Products = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; } & ProductsProps) => (
  <Suspense fallback={null}>
    <LazyProducts {...props} />
  </Suspense>
);

export default Products;
