import { apiProductsListByType } from "@/lib/apiRequest";
import Link from "next/link";
import React from "react";

const ProductListByCate = async (props: ProductListByCateProps) => {
  const data  = (await apiProductsListByType(
    props.params.category
  )) as ProductListItem[] || [];

  return (
    <>
      <ul>
        {data?.map((item, idx) => {
          return (
            <Link key={idx} href={`${props.params.category}/${item._id}`}>
              {item.en.name}
            </Link>
          );
        })}
      </ul>
    </>
  );
};

interface ProductListByCateProps {
  params: { category: string };
}

export default ProductListByCate;
