import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css';
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../../asyncMock";


const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);


  const { categoryId } = useParams()

  useEffect(() => {
  const asyncFunc = categoryId ? getProductsByCategory : getProducts

  asyncFunc(categoryId)
   .then(response => {
      setProducts (response)
    })
    .catch(error => {
      console.error(error)
    })
  }, [categoryId])

  return (
    <div className="ItemListContainer">
      <h1>{greeting}</h1>
      <div>
        <ItemList products={products} />
      </div>
    </div>
  );
};

export default ItemListContainer;