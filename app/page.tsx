import About from "./components/About";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import DashboardPage from "./components/Dashbord";
import ShopPreview from "./components/ShopPreview";
import GalleryPreview from "./components/GalleryPreview";


export default function Home() {
  return (
    <>
    
      <Hero />
      <About/>
<ShopPreview/>
<GalleryPreview />

      <DashboardPage/>
      <Contact/>


    
    </>
  );
}
