import Image from "next/image";
import Navbar from "@/components/navbar";
import HomePage from "./home";
import { Background } from "@/public";
export default function Page() {
  return (
 <div 
 style={{
  backgroundImage: `url(${Background.src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
 }}
 className="flex  min-h-screen flex-col gap-15">
  <Navbar/>
  <HomePage/>
 </div>
  );
}
