"use client"
import FeatureCards from "./Components/Feature.jsx";
import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header.jsx";

export default function Home() {
  return (
   <div className="flex items-center flex-col">

    <div className="w-full h-[900px] bg-[rgba(199,255,236,0.5)] rounded-b-[150px]">
      <Header/>

      <div className="flex flex-col items-center">
        <img src="Main Logo.svg" alt="illustration" width={750} className="my-[50px]"/>

        <div className="flex  items-center gap-[45px]">
          <button className="text-white font-semibold w-[140px] h-[50px] bg-[#0D9488] rounded-[15px] px-[10px] text-[16px]">Get Started</button>
          <p className="font-semibold underline text-[18px]">Check out the features</p>
        </div>
      </div>
    </div>

    <h1 className="my-[80.5px] text-[50px] text-center px-[200px] font-semibold">Plan smarter. Spend wiser. Join <span className="text-[#0D9488]">thousands</span> already budgeting better.</h1>

    <div className="bg-[#EFFFFE] w-full h-[700px] flex items-center flex-col mb-50">
      <img src="Feature_H1.svg" alt="feature heading" className="w-[600px] mt-[40px]"/>
      <p className="text-[#777575] font-semibold text-[16px] my-[30px]">Everything you need to visualize, analyze, and optimize your financial data with complete privacy and security.</p>

      <div className="my-10">
        <FeatureCards/>
      </div>
    </div>


    {/* footer Section */}
    <Footer/>
   </div>
  );
}
