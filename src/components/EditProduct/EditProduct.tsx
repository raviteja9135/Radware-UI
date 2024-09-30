import React, { ElementRef, FC, useRef, useState } from 'react';
import styles from './EditProduct.module.css';
import { Response } from '../Products/Products';
import { Alert, Button, TextField } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { IconButton } from '@mui/material';
export interface EditProductProps {
  item: Response,
  updatedItem: Function,
  close: Function
}

const EditProduct: FC<EditProductProps> = ({item, updatedItem,close}) => {
  const [editState, seteditState] = useState<Response>(item);
  const passwordRef = useRef<any>()
  const [errorMisMatch, setErrorMisMatch] = useState<boolean>(false);

  const onSubmit = (event:any)=> {
    event.preventDefault()
    if(!errorMisMatch) {
      updatedItem(editState);
    } else {
      passwordRef.current.focus()
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    seteditState({
      ...editState,
      [name]: value,
    });
  };
  const checkPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(editState.password === e.target.value) {
      setErrorMisMatch(false);
    } else {
      console.log(errorMisMatch);
      setErrorMisMatch(true);
    }
  }

  return (
  <div className={styles.EditProduct} data-testid="EditProduct">
    <div className={styles.header}><h1>Edit User Details</h1> <CloseRoundedIcon color='action' onClick={() => close()}/></div> 
    
    <form onSubmit={onSubmit}>
   {errorMisMatch && <Alert severity="error" className={styles.alert}>Passwords don't match. Please type again</Alert>}<br/><br/>
    <TextField id="outlined-basic" name='name' defaultValue={item.name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e)} label="name" variant="outlined" /><br/><br/>
    <TextField id="outlined-basic_email" name='email' type='email' defaultValue={item.email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e)} label="email" variant="outlined" /><br/><br/>
    <TextField id="outlined-basic_password" ref={passwordRef} name='password' type='password' defaultValue='' onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e)} label="password" variant="outlined" /><br/><br/>
    <TextField id="outlined-basic_check" name='check' type='password' defaultValue='' onChange={(e: React.ChangeEvent<HTMLInputElement>) => checkPassword(e)} label="re-type password " variant="outlined" /><br/><br/>
    <Button type="submit" variant="outlined">Update User</Button>
    </form>
  </div>
)
};

export default EditProduct;
