import React, {useState} from "react";
import {useQuery} from "@tanstack/react-query";

export default function Products() {
  const [checked, setChecked] = useState(false);
  
  // const [loading, error, products] = useProducts({ salesOnly: checked });
  // const {
  //   isLoading, error, data: products,
  // } = useQuery({
  //   ["products"]
  // , async () =>
  // {
  //   console.log("fetching...");
  //   return fetch(`data/products.json`).then((res) => res.json());
  // },});
  // },});
  const {
    isLoading,
    error,
    data: products,
  } = useQuery({
    queryKey: ["products", checked],
    queryFn: async () => {
      console.log("fetching ......");
      return fetch(`data/${checked ? "sale_" : ""}products.json`).then((res) => res.json());
    },
    staleTime: 1000*60*5
  });
  const handleChange = () => setChecked((prev) => !prev);
  
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error!!</p>;
  
  return (
    <>
      <label>
        <input type="checkbox" checked={checked} onChange={handleChange}/>
        Show Only 🔥 Sale
      </label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
