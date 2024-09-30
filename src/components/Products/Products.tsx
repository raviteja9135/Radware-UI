import React, { FC, useEffect, useMemo, useState } from 'react';
import styles from './Products.module.css';
import axios from 'axios';
import EditProduct from '../EditProduct/EditProduct';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

export interface ProductsProps { }
export interface Response {
  name: string,
  email: string,
  _id: string,
  password: string
}
let editValueInitialValue: Response = {
  name: '',
  email: '',
  _id: '',
  password: ''
};
const Products: FC<ProductsProps> = () => {
  const [products, setProducts] = useState<Response[]>([]);
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const [editValue, setEditValue] = useState<Response>(editValueInitialValue);
  useEffect(() => {
    (async () => {
      let response = await axios.get('http://localhost:3000/products').then((res) => res.data)
      setProducts([...response])
    })()

  }, [])

  const updatedItem = async (item:Response) => {
    setShowEdit(false);
    let filteredProducts = products.filter((itemObj) => item._id !== itemObj._id);

    setProducts([
      ...filteredProducts,item
    ])
    
    await axios.post('http://localhost:3000/product-update',item).then((res) => {
      alert(JSON.stringify(res.data));
    });

  }

  const showUI =() => {
    if(showEdit) {
      return (<>
      <EditProduct item={editValue} updatedItem={updatedItem} close={() => setShowEdit(false)}/>
      </>)
    } else {
      return (<>
      <TableContainer className={styles.Products} data-testid="Products" component={Paper}>
      <Table key='table'>
        <TableHead>
          <TableRow>
            <TableCell >
              Name
            </TableCell>
            <TableCell>
              Email
            </TableCell>
            <TableCell>
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product: Response) => (
            <TableRow key={product._id}>
              <TableCell key={product.name}>
                {product.name}
              </TableCell>
              <TableCell key={product.email}>
                {product.email}
              </TableCell>
              <TableCell>
              <Button variant="contained" key={product._id + product.name + 'edit'} onClick={() => updateItem(product)}> Edit</Button>&nbsp;
              <Button variant="outlined"key={product._id + product.name + 'delete'} onClick={() => deleteItem(product)}> Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
      </>)
    }
  }


  const updateItem = function (item: Response) {
    setShowEdit(true);
    setEditValue(item);
  }
  const deleteItem = async function (item: Response) {
    const payload = { id: item._id }
    const response = await axios.post('http://localhost:3000/products', payload).then((res) => res.data);
    setProducts([...response]);
  }

  return (
   <>
   {showUI()}
   </>
      

  )
};

export default Products;
