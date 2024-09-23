
import Bestselling from "@/bestselling";
import Bestsellingcard from "@/bestsellingcard";
import Categories from "@/categories";
import Featuredproduct from "@/lib/components/featuredproduct";
import Hero from "@/lib/hero";
import Services from "@/lib/services";
import Promotion from "@/promotion";
export default function Home() {

  return (
    <div><Hero/>
    <Featuredproduct/>
    <Services/>
    <Promotion/>
    <Categories/>
    <Bestselling/></div>
  );
}
