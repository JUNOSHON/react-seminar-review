import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {FiShoppingBag} from "react-icons/fi";
import {BsFillPencilFill} from "react-icons/bs";
import {login, logout, onUserStateChange} from "../api/firebase";
import User from "./User";

export default function Navbar() {
  const [user, setUser] = useState();
  
  useEffect(() => { //컴포넌트가 마운트 될 때 사용자 상태가 어떤지 판단해서 user 상태에 넣어줌
    onUserStateChange(user => {
      console.log(user);
      setUser(user);
    });
  }, []);
  
  return (
    <header className="flex justify-between border-b border-gray-300 p-4">
      <Link to="/" className="flex items-center text-4xl text-brand">
        <FiShoppingBag/>
        <h1>Shoppy!</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        <Link to="/carts">Carts</Link>
        <Link to="/products/new" className="text-2xl">
          <BsFillPencilFill/>
        </Link>
        {user && <User user={user}/>}
        {user ? <button onClick={logout}>Logout</button> : <button onClick={login}>Login</button>}
      </nav>
    </header>
  );
}
