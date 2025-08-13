import Image from "next/image";
import Navbar from "@/components/navbar";
import HomePage from "./home";
import Footer from "@/components/footer";

export default function Page() {

  const maxWidth = '1300px'

  return (
 <div 
 style={{
  backgroundImage: `url('/image/gymbg.png')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'repeat',
 }}
 className="flex w-full  min-h-screen flex-col ">
<div  className="w-full mx-auto" style={{ maxWidth }}>


  <Navbar/>
  <HomePage/>
 </div>
 {/* footer  */}
 <div className="pt-15">

<Footer />
 </div>
 </div>
  );
}
