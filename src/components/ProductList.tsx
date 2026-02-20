import { ProductsType } from '@/types'
import React from 'react'
import Categories from './Categories'
import ProductCard from './ProductCard'
// temp
const products: ProductsType = [
    {

        id: 1,
        name: "Product1",
        shortDescription: "This is the dummy product for development purpose",
        description: "product number 1",
        price: 59.6,
        sizes: ["s", "m", "l", "xl", "xxl"],
        colors: ["red", "black", "blue"],
        images: { gray: "/product/6a.png", white: "/product/6w.png" },


    },
    {
        id: 2,
        name: "Product2",
        shortDescription: "This is the dummy product for development purpose",
        description: "product number 1",
        price: 59.6,
        sizes: ["s", "m", "l", "xl", "xxl"],
        colors: ["red", "black", "blue"],
        images: { gray: "/product/6a.png", white: "/product/6w.png" },

    }, {
        id: 3,
        name: "Product3",
        shortDescription: "This is the dummy product for development purpose",
        description: "product number 1",
        price: 59.6,
        sizes: ["s", "m", "l", "xl", "xxl"],
        colors: ["red", "black", "blue"],
        images: { gray: "/product/6a.png", white: "/product/6w.png" },

    }, {
        id: 4,
        name: "Product4",
        shortDescription: "This is the dummy product for development purpose",
        description: "product number 1",
        price: 59.6,
        sizes: ["s", "m", "l", "xl", "xxl"],
        colors: ["red", "black", "blue"],
        images: { gray: "/product/6a.png", white: "/product/6w.png" },

    },
     {
        id: 5,
        name: "Product5",
        shortDescription: "This is the dummy product for development purpose",
        description: "product number 1",
        price: 59.6,
        sizes: ["s", "m", "l", "xl", "xxl"],
        colors: ["red", "black", "blue"],
        images: { gray: "/product/6a.png", white: "/product/6w.png" },

    },
     {
        id: 6,
        name: "Product6",
        shortDescription: "This is the dummy product for development purpose",
        description: "product number 1",
        price: 59.6,
        sizes: ["s", "m", "l", "xl", "xxl"],
        colors: ["red", "black", "blue"],
        images: { gray: "/product/6a.png", white: "/product/6w.png" },

    },
     {
        id: 7,
        name: "Product7",
        shortDescription: "This is the dummy product for development purpose",
        description: "product number 1",
        price: 59.6,
        sizes: ["s", "m", "l", "xl", "xxl"],
        colors: ["red", "black", "blue"],
        images: { gray: "/product/6a.png", white: "/product/6w.png" },

    },
     {
        id: 8,
        name: "Product8",
        shortDescription: "This is the dummy product for development purpose",
        description: "product number 1",
        price: 59.6,
        sizes: ["s", "m", "l", "xl", "xxl"],
        colors: ["red", "black", "blue"],
        images: { gray: "/product/6a.png", white: "/product/6w.png" },

    },
]
function ProductList() {

    return (
        <div className='w-full'>
            <Categories />
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12'>
{products.map(product=>(
    <ProductCard key={product.id} product={product}/>
))}
            </div>
        </div>
    )
}

export default ProductList