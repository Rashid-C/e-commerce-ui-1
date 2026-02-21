import ProductList from "@/components/ProductList"
import Image from "next/image"

const Homepage = async ({ searchParams }: { searchParams: Promise<{ category: string }> }) => {

  const category = (await searchParams).category
  return (
    <div className=''>
      <div className=" relative aspect-[3/1] mb-12">
        <Image src="/llc.jpeg" alt="main Image"
          //  width={1200} height={600} 
          fill
        />
      </div>
      <ProductList category={category} params="homepage" />
    </div>
  )
}

export default Homepage