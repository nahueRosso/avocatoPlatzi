import React, { useEffect,useState } from 'react'
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'
import Card from "../../component/Card/Card";
import data from 'database/data'

const ProductPage = () => {
  const { query,asPath } = useRouter()
  const [dataAvoId,setDataAvoId] = useState<any>([])
  

  useEffect(()=>{
    fetch("/api/avo").then(res=>res.json()).then(({data})=>
    setDataAvoId(data.find((user: any) => user.id === query.id)))
  },[])


  return (
    <section>
      <Card response={dataAvoId}/>
      <h3 style={{marginLeft:"1em"}} >{dataAvoId.attributes.description}</h3>
    </section>
  )
}

export default ProductPage
