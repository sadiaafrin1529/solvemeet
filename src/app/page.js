import Image from "next/image";
import Hero from "./components/banner/Hero";
import Category from "./components/category/Category";


export default async function Home() {
 
  return (
    <main>
      <div>
        <Hero />
        <Category/>
        </div>
    </main>
  );
}
