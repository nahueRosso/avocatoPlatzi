import React, { useEffect, useState } from 'react'
import fetch from 'isomorphic-unfetch'
import Card from '../component/Card/Card'
import style from "./index.module.css";

const index = () => {
  const [dataAvo, setDateAvo] = useState<any>([])


  useEffect(() => {
    fetch('/api/avo').then(res => res.json()).then(({ data, length }) => {
      setDateAvo((e: any) => e = data)
    })
  }, [])

  console.log(dataAvo)

  return (
    <>
      <h1 style={{textAlign: "center"}}>Avo Store</h1>
      <div className={style.bodyIndex}>
        {dataAvo.map((res: any) => {
          return (<>
            <Card response={res} />
          </>
          )
        })
        }
      </div>
    </>
  )
}

export default index
