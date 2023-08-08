import CategoryPackItem from "@/components/products/category-pack-item";
import { apiGetListCate } from "@/lib/apiRequest";
import Link from "next/link";
import React from "react";

const ProductsManagement = async (props: ProductsManagementProps) => {
  const allCategories = (await apiGetListCate()) as CategoryWithProdQua[];

  return (
    <>
      <div className="flex gap-4 flex-wrap">
        {allCategories?.map((cate, idx) => (
          <Link key={idx} href={`/products/${cate.cate}`}>
            <CategoryPackItem name={cate.en} quantity={cate.count} />
          </Link>
        ))}
      </div>
    </>
  );
};

interface ProductsManagementProps {
  allCategories: string[];
}

export default ProductsManagement;
