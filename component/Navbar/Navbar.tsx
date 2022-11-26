import React from 'react'
import style from'./navbar.module.css'
import Link from "next/link";


const Navbar = () => {
  return (
    <nav className={style.nav}>
      <Link href='/' className={style.navChild} >Avo Store</Link>
      <Link href='/cart' className={style.navChild} >Canasta</Link>
    </nav>
  )
}

export default Navbar
