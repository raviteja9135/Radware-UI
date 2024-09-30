import React, { lazy, Suspense } from 'react';
import { EditProductProps } from './EditProduct';

const LazyEditProduct = lazy(() => import('./EditProduct'));

const EditProduct = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; } & EditProductProps) => (
  <Suspense fallback={null}>
    <LazyEditProduct {...props} />
  </Suspense>
);

export default EditProduct;
