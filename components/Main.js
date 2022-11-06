import Image from "next/image";
import React from "react";
import Facility from "./Facility";
import Map from "./Map";

export default function Hero() {
  return (
    <>
    <div className="container mx-auto flex">
      <div className="flex">
        <Image
          src="/images/standing.jpg"
          alt="Ain"
          width={400}
          height={600}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-9xl">SeoAin</h1>
        <div className="flex flex-row">
        <h2 className="text-lg">現 티나스타일 인천 송도점 원장 </h2>
        <Image className="cursor-pointer" src='/images/insta.jpg' alt="insta" width={40} height={40}/>
        </div>
        <h2 className="text-lg">서아인 아이래쉬 원장</h2>
      </div>
    </div>
    <Facility/>
    <Map/>
    </>
  );
}
