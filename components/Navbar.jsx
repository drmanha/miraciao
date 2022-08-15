import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

import { Cart } from "./";
import { useStateContext } from "../context/StateContext";
import MiraCiao from "./img/miraciao_c.png";

console.log(MiraCiao)

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
      <div className="logo">        
        {/* <Link href="/"><img src="/_next/static/media/miraciao.1f27c546.png" alt="" /></Link> */}
        {/* <Link href="/"><img src="/_next/static/media/miraciao1.38bea7a1.png" alt="" /></Link> */}
        <Link href="/"><img src="/_next/static/media/miraciao_c.ff49cc06.png" alt="" /></Link>
        
        
      </div>

      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
