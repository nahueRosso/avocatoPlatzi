import React from 'react'
import style from './card.module.css'
import Link from 'next/link'


const Card = ({response:{name,image,price,id}}:any) => {

  return (
    <Link href={`/product/${id}`} key={id} id={id} className={style.cardContainer} >
      <img src={image} alt={name} className={style.cardImage} />
      <div className={style.cardBar}/>
      <h2 className={style.cardH2}>{name}</h2>
      <h4 className={style.cardH4}>{price}</h4>
    </Link>
  )
}

export default Card
