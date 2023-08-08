import React from 'react'

const ProductDetail = (props: ProductDetailProps) => {
  return (
    <div>{props.params.id}</div>
  )
}

interface ProductDetailProps{
    params:{
        id:string;
    }
}

export default ProductDetail