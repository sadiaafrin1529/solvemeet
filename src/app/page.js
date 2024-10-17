import Image from "next/image";
import Hero from "./components/banner/Hero";
import Category from "./components/category/Category";
import InfoSection from "./components/information/InfoSection ";
import Service from "./components/service/Service";
import Solutions from "./components/solution/Solutions";
import BestAdviser from "./components/bestAdviser/BestAdviser";
import BlogsAndNews from "./components/blogsAndNews/BlogsAndNews";
import ClientSays from "./components/clientSays/ClientSays";
import Footer from "./components/footer/Footer";





export default async function Home() {
 
  return (
    <main>
      <div>
        <Hero />
        <Category />
        <InfoSection/>
        <Service/>
        <Solutions />
        <BestAdviser />
        <ClientSays/>
        <BlogsAndNews />
    <Footer/>
        </div>
    </main>
  );
}
