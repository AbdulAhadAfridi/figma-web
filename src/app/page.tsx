
import plant from "@/app/public/plant/plant.png"
import frame1 from "@/app/public/plant/frame1.png"
import frame2 from "@/app/public/plant/frame2.png"
import frame3 from "@/app/public/plant/frame3.png"
import frame6 from "@/app/public/plant/frame6.png"
import frame7 from "@/app/public/plant/frame7.png"
import photo1 from "@/app/public/plant/photo1.png"
import photo2 from "@/app/public/plant/photo2.png"
import photo3 from "@/app/public/plant/photo3.png"

import Image from "next/image";
import { Facebook, Twitter } from "lucide-react"



export default function Homepage() {
  return (
    
    <>

     
      <section className=" mt-8 px-4 max-w-screen-xl mx-auto">
        <Image
        src={plant} alt="pic plant"
        width={1248}
        height={512}
         />
  
  <div className=" mt-28 max-w-screen-xl mx-auto  ">
  {/* <!-- Left section: Title, Description, and Button --> */}
  <div className="flex flex-col md:flex-row items-center">
    <div className="w-1/3 ml-2 ">
      <h3 className="font-extrabold text-2xl mb-0 md:text-xl ">Best Selling </h3>
      <h3 className="font-extrabold text-2xl mb-2 md:text-xl ">Plants</h3>
      <p className="text-gray-500 mb-4">Easiest way to a healthy life by buying your favorite plants.</p>
      <button className="bg-teal-200 text-teal-800  py-2 px-3 md:py-2 md:px-4  rounded-md">See more </button>
    </div>
    
    {/* <!-- Right section: Plant Images --> */}
    <div className="flex w-2/3 justify-between ml-6  flex-col md:flex-row items-center mt-6 md:mt-0">
      {/* <!-- Plant 1 --> */}
      <div className="text-center mt-4 md:mt-0">
        <Image src={photo1} alt="Natural Plants" className="rounded-lg mb-4" width="200"  />
        
      </div>
      {/* <!-- Plant 2 --> */}
      <div className="text-center mt-4 md:mt-0 ">
        <Image src={photo2} alt="Artificial Plants" className="rounded-lg mb-4" width="200" />
        
      </div>
      {/* <!-- Plant 3 --> */}
      <div className="text-center mt-4 md:mt-0">
        <Image src={photo3} alt="Artificial Plants" className="rounded-lg mb-4" width="200" />
        
      </div>
    </div>

  </div>
</div>
<section className=" text-center max-w-screen-xl mx-auto">
            <h2 className="text-4xl md:text-2xl font-bold text-gray-800 mb-4 mt-24 md:pl-20 ">About Us</h2>
            <p className="text-gray-600 mb-8  text-sm md:ml-20 ">Order now and appreciate the beauty of nature</p>
            <div className=" flex-col  md:flex-row flex justify-around ">
                {/* <!-- Feature 1 --> */}
                <div className="">
                    <div className="bg-blue-200 w-16 h-16 rounded-full mx-auto flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </div>
                    <h3 className="mt-4 font-bold text-gray-800 text-sm">Large Assortment</h3>
                    <p className="text-gray-600 text-xs">We offer many different types of products with fewer variations in each category.</p>
                </div>

                {/* <!-- Feature 2 --> */}
                <div className="text-center mt-4 md:mt-0">
                    <div className="bg-blue-200 w-16 h-16 rounded-full mx-auto flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M4 16h16M4 12h16m-8 0H4m0 0h8m-4-4v4m0-4v4m0-4V4h16v12M4 8v4" />
                        </svg>
                    </div>
                    <h3 className="mt-4 font-bold text-gray-800 text-sm">Fast & Free Shipping</h3>
                    <p className="text-gray-600 text-xs">4-day or less delivery time, free shipping, and an expedited delivery option.</p>
                </div>

                {/* <!-- Feature 3 --> */}
                <div className="text-center mt-4 md:mt-0">
                    <div className="bg-blue-200 w-16 h-16 rounded-full mx-auto flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-4.03C18.403 11.674 17.745 11 17 11h-1l-1.25 1.25L12 13l-2.25-2.25H9c-.745 0-1.403.674-1.595 1.97L6 17h5m-1 4h2m1-4H9l-.5 1.5a.5.5 0 01-.5.5H7a.5.5 0 01-.5-.5L5 15m10 0v-4m0 4v-4m0 0v4" />
                        </svg>
                    </div>
                    <h3 className="mt-4 font-bold text-gray-800 text-sm">24/7 Support</h3>
                    <p className="text-gray-600 text-xs">Answers to any business-related inquiry 24/7 and in real-time.</p>
                </div>
            </div>
        </section>

         <div className="text-center mt-8 max-w-screen-xl mx-auto ">
          <h4 className="font-extrabold text-3xl mt-24">Categories</h4>
          <p className="text-sm text-gray-600 mt-2">Find what you are you are looking for</p>
         </div>
         <div className="flex items-center flex-col lg:flex-row mt-14 py-5 bg-blue-200 w-[1440] h-[841] max-w-screen-xl  ">
         <div className="md:mx-auto ">
          <Image 
          className=" mb-5 flex-1 mt-10   "
          src={frame1} alt="pic plant" width={360} height={100}/>
          </div>
          <div><Image
          className=" flex-1 mt-10 md:pl-6 md:mr-14 " src={frame2} alt="pic plant frame2" width={360} height={100}/></div>
           <div><Image
           className=" flex-1 mt-14 mb-8 md:mr-8" width={360} height={100}
           src={frame3} alt=" pic plant 2"/>
           </div>
           </div>

          <div className="font-extrabold  mt-12 text-2xl max-w-screen-xl mx-auto ">
          <h3 className="text-center md:text-left">What customers say about </h3>
          <h4 className="text-center md:text-left" >GREEMIND?</h4>
           </div>
      <div className=" max-w-screen-xl mx-auto flex mt-12 flex-col md:flex-row md:space-x-14 ">
        <Image   src={frame6} width={600} height={40} alt="plant pic" />
        <Image className="mt-16 md:mt-0" src={frame7}  width={600} height={40} alt="plant pic" />
      </div>
      
      </section>

<footer className="bg-blue-200 py-12 mt-20 text-xs pb-0  max-w-screen-xl mx-auto ">
       
      
        {/* Left Section: Brand and Socials */}
        <div className="flex justify-between pb-16   ">
        <div className="px-6 ml-8 md:ml-0 ">
          <h3 className="font-bold ml-6 text-lg">GREENMIND</h3>
          <p className="text-gray-950 mt-5 ml-6 py-1  ">We help you find </p>
          <p className="text-gray-950 mb-4 ml-6 ">your dream plant</p>
          
          {/* Social Icons */}
        
           <div className="flex space-x-2">
             <a href="#" className="text-gray-700 hover:text-black  mb-4 ml-6 ">
             <Facebook />
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M21.75 3.75H2.25A.75.75 0 001.5 4.5v15a.75.75 0 00.75.75h19.5a.75.75 0 00.75-.75v-15a.75.75 0 00-.75-.75zM7.5 18.75h-3V9h3v9.75zm1.5-11.25a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm10.5 11.25h-3v-4.5c0-2.013-2.625-1.875-2.625 0v4.5h-3V9h3v1.5h.015C15.615 8.625 19.5 8.313 19.5 12.75v6z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
            <Twitter/>
            </a>
            </div>
          </div>
        

        {/* Right Section: Links */}
        <div className="flex items-start h-1  mr-24 lg:mr-0 text-center">
    <div className="flex flex-col items-center mx-4">
        <h4 className="font-semibold text-lg">Information</h4>
        <ul className="mt-2 space-y-4 py-5">
            <li><a href="#" className=" text-md text-gray-950 hover:text-black">About</a></li>
            <li><a href="#" className="text-gray-950 hover:text-black">Product</a></li>
            <li><a href="#" className="text-gray-950 hover:text-black">Blog</a></li>
        </ul>
    </div>
    
    <div className="flex flex-col items-center mx-4">
        <h4 className="font-semibold text-lg">Company</h4>
        <ul className="mt-2 space-y-4 py-5">
            <li><a href="#" className="text-gray-950 hover:text-black">Community</a></li>
            <li><a href="#" className="text-gray-950 hover:text-black">Career</a></li>
            <li><a href="#" className="text-gray-950 hover:text-black">Our story</a></li>
        </ul>
    </div>

    <div className="flex flex-col items-center mx-4">
        <h4 className="font-semibold text-lg">Contact</h4>
        <ul className="mt-2 space-y-4 py-5">
            <li><a href="#" className="text-gray-950 hover:text-black">Getting Started</a></li>
            <li><a href="#" className="text-gray-950 hover:text-black">Pricing</a></li>
            <li><a href="#" className="text-gray-950 hover:text-black">Resources</a></li>
        </ul>
    </div>
</div>

</div>
      
      {/* Copyright */}
      <p className="text-gray-950 text-sm px-10 py-4 text-center lg:text-left ">2024 all Right Reserved Term of use GREENMIND</p>
    </footer>
</>
);
}



 




        


      