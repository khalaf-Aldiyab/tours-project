import axios from "axios";
import { useEffect, useState } from "react"
import Card from "./Card";

const ListProducts = () => {

const [product,setProduct] = useState([]);
const [eroor,setEroor] = useState();

const getData = async () => {
    try{
        const respons = await axios.get("https://dummyjson.com/products");
        setProduct(respons.data.products);
    }catch(err){
        setEroor(err.message)
    }
}

    useEffect( ()=>{
        getData();
    },[] );

  return (
    <>
    {eroor && <p>eroor</p>}
    <div className="flex flex-wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 justify-items-center max-w-screen-xl mx-auto">
  {product.map((p, index) => (
    <Card
      key={index}
      title={p.title}
      price={p.price}
      description={p.description}
      img={p.thumbnail}
    />
  ))}
</div>

    </>
  )
}

export default ListProducts