
import Banner from "@/components/Banner";
import Image from "next/image";
import ProductView from "@/components/ProductView";
import ProductList from "@/components/ProductList";
import Banner2 from "@/components/Banner2";

export default function Home() {
  return (
    <>

      <section className="section 1">
        <Banner />
      </section>

      <section className="section2">
        <div className="flex flex-col  justify-center mt-8 text-center items-center">
          <h2 className="font-bold text-[27px]">Browse The Range</h2>
          <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing adding.</p>
        </div>
        <ProductView />
      </section>

      <section className="section3">

        <div className="flex flex-col  justify-center mt-8 text-center items-center">
          <h2 className="font-bold text-[27px]">Our Products</h2>
        </div>
        <ProductList />
        <div className="flex flex-col  justify-center mt-8 text-center items-center">
          <button
            type="button"
            className="text-yellow-600 border-2 w-[230px] border-yellow-600 py-3 px-6  rounded-lg  hover:bg-yellow-600 hover:text-white transition duration-300">
            Show More
          </button>
        </div>
      </section>


      <section className="section4">
        <div className="w-full bg-gray-100 mt-16"> <Banner2 /></div>

      </section>

    </>
  );
}
