import React from "react";
import {useAuthContext} from "../context/AuthContext";
import {useQuery} from "@tanstack/react-query";
import {getCart} from "../api/firebase";
import CartItem from "../components/CartItem";
import {BsFillPlusCircleFill} from "react-icons/bs";
import {FaEquals} from "react-icons/fa";
import PriceCart from "../components/PriceCard";

export default function MyCart() {
  const {uid} = useAuthContext();
  const {isLoading, data: products} = useQuery({
    queryKey: ["carts"],
    queryFn: () => getCart(uid),
  });
  
  const SHIPPING = 3000;
  if (isLoading) return <p>Loading. . .</p>;
  const hasProducts = products && products.length > 0;
  const totalPrice = products && products.reduce((prev, cur) => prev + parseInt(cur.price) * cur.quantity, 0);
  return (
    <section>
      <p>장바구니</p>
      {!hasProducts && <p>장바구니에 상품이 없음.</p>}
      {hasProducts && <>
        <ul>
          {products && products.map((product) => (
            <CartItem key={product.id} product={product}/>
          ))}
        </ul>
        <div>
          <PriceCart text="상품 총액" price={totalPrice}/>
          <BsFillPlusCircleFill/>
          <PriceCart text="배송액" price={SHIPPING}/>
          <FaEquals/>
          <PriceCart text="총 가격" price={totalPrice + SHIPPING}/>
        </div>
      </>
      
      }
    </section>
  );
}
