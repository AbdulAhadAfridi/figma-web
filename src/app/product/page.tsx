'use client'
import indoor from "@/app/public/plant/indoor.jpg";
import frame4 from "@/app/public/plant/frame4.jpeg";
import Image from "next/image";
import Typewriter from "typewriter-effect"; // Assuming this is imported correctly
import Wrapper from "../component/Wrapper";
export default function Product() {
  return (
    <Wrapper>
    <section>

      {/* Left Side: Text about Plants */}
      <div className="flex">
        <div>
          <h2 className="text-center font-extrabold text-3xl mt-11 mr-4">
            Benefits of Indoor Plants
          </h2>
          <p className="text-1xl text-balance text-gray-500 mt-4 ml-2">
            Indoor plants are not only beautiful but also offer a range of
            health and environmental benefits. They help purify the air, reduce
            stress, and can improve your overall well-being. Whether you have a
            small apartment or a large house, adding a touch of greenery can
            enhance your living space.
          </p>
        </div>
        <div className="mt-8">
          <Image src={frame4} alt="indoor pic" />
        </div>
      </div>

      {/* Typewriter Effect */}
      <h1 className="font-extrabold text-center text-blue-900 shadow-sm mt-6 text-3xl">
        <Typewriter
          options={{
            strings: ["Dream Collection of Indoor Plants By,", "Abdul Ahad Afridi"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>

      {/* Right Side: Image */}
      <div className="flex justify-center mt-8">
        <Image
          className="rounded-lg shadow-lg object-cover"
          src={indoor}
          alt="Indoor plants"
          width={1248}
          height={512}
        />
      </div>
    </section>
    </Wrapper>
    
  );
}
