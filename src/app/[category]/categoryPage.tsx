"use client"
import Bestsellingcard from '@/bestsellingcard';
import { useAppSelector } from '../store/hooks';

const CategoryPage = ({params}:{params:{category:string}}) => {
    const product=useAppSelector((state)=>state.products);
    const bestsell=product.filter((val)=>val.category==params.category)
  return (
    <div>    <div className="text-center mb-20">
    <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 capitalize">
    {params.category}
    </h1>

    <div className="flex mt-2 justify-center">
      <div className="w-16 h-1 rounded-full bg-orange-600 inline-flex" />
    </div>
    
    {/* category page start here */}
    <div className="flex flex-wrap justify-center gap-5">
  
{
bestsell.map((items:any,i)=>(
  <Bestsellingcard key={i} src={items.image[0]} alt={items.title} title={items.title} description={items.description} price={items.price} category={items.category} slug={items.slug} discount={items.discount}/>
))}

    </div>
    </div> </div>
  )
}

export default CategoryPage