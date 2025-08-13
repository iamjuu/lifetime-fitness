import Image from "next/image";
import Navbar from "@/components/navbar";
import HomePage from "./home";
import { Background } from "@/public";
export default function Page() {

  const maxWidth = '1300px'

  return (
 <div 
 style={{
  backgroundImage: `url(${Background.src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
 }}
 className="flex w-full  min-h-screen flex-col ">
<div  className="w-full mx-auto" style={{ maxWidth }}>


  <Navbar/>
  <HomePage/>
 </div>
 </div>
  );
}
