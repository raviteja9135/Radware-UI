import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EditProduct from './EditProduct';

let itemObj = {
  "_id": "59b99db6cfa9a34dcd7885ba",
  "name": "Cersei Lannister",
  "email": "lena_headey@gameofthron.es",
  "password": "$2b$12$FExjgr7CLhNCa.oUsB9seub8mqcHzkJCFZ8heMc8CeIKOZfeTKP8m"
};
describe('<EditProduct />', () => {
  test('it should mount', () => {
    render(<EditProduct item={itemObj} updatedItem={()=> {}}  close={()=> {}}/>);

    const EditProductEle = screen.getByTestId('EditProduct');

    expect(EditProductEle).toBeInTheDocument();
  });
});