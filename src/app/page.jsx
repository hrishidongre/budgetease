"use client"
import Link from "next/link.js";
import FeatureCards from "./Components/Feature.jsx";
import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header.jsx";
import {useSession} from "@supabase/auth-helpers-react"


export default function Home() {
  const session = useSession()
  return (
   <div className="flex items-center flex-col">

    <div className="w-full h-[900px] bg-gradient-to-t from-teal-100 via-white to-teal-100 rounded-b-[150px]">
      <Header/>

      <div className="flex flex-col items-center">
        <img src="Main Logo.svg" alt="illustration" width={750} className="my-[50px] "/>

        
           {/* Get Started and features button */}
      {session ? ( <Link href="#features" className="font-semibold underline text-md transition-transform duration-300 hover:scale-[1.05]">
                    Check out the features</Link>
      ) : (

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">

          <Link href="/SignUp" className="text-white shadow font-semibold w-[140px] h-[50px] bg-[#0D9488] rounded-[10px]  text-sm flex items-center justify-center transition-transform duration-300 hover:scale-[1.05] hover:shadow-lg">Get Started</Link>

          <Link href="#features" className="font-semibold underline text-md transition-transform duration-300 hover:scale-[1.05]">
          Check out the features</Link>

        </div>
      )}
      </div>
    </div>

    <h1 className="my-[80.5px] text-[50px] text-center px-[200px] font-semibold">Plan smarter. Spend wiser. Join <span className="text-[#0D9488]">thousands</span> already budgeting better.</h1>
    
    {/*Feature Section */}
    <div className="bg-gradient-to-r from-teal-100 via-white to-blue-100 w-full h-[700px] flex items-center flex-col mb-50">
       <h1 className="text-4xl md:text-6xl font-bold  mt-20 mb-6 text-transparent bg-clip-text bg-gradient-to-l from-blue-600 to-teal-600">
         Powerful Features for Financial Success
        </h1>
      <p className="text-gray-600 font-semibold text-[16px] my-[30px]">Everything you need to visualize, analyze, and optimize your financial data with complete privacy and security.</p>

      <div className="my-12" id="features">
        <FeatureCards />
      </div>
    </div>


    {/* footer Section */}
    <Footer/>
   </div>
  );
}
