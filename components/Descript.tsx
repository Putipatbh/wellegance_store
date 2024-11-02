"use client";

import useCart from "@/lib/hooks/useCart";

const ProductDes = ({ productDes }: { productDes: ProductType }) => {

    const cart = useCart();

    return (
        <div className="max-w-[900px] flex flex-col gap-5 items-center">
            <p className="text-base-medium text-heading2-bold text-grey-font">Description:</p>
            <p className="text-small-medium text-grey-font">{productDes.description}</p>
        </div>
    )
}

export default ProductDes