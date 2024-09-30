/* eslint-disable */
import EditProduct from './EditProduct';

export default {
  title: "EditProduct",
};

let itemObj = {
  "_id": "59b99db6cfa9a34dcd7885ba",
  "name": "Cersei Lannister",
  "email": "lena_headey@gameofthron.es",
  "password": "$2b$12$FExjgr7CLhNCa.oUsB9seub8mqcHzkJCFZ8heMc8CeIKOZfeTKP8m"
};

export const Default = () => <EditProduct item={itemObj} updatedItem={()=> {}} close={()=> {}}/>;

Default.story = {
  name: 'default',
};
