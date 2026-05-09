import Image from "next/image";
import Navbar from "./_components/layout/Navbar";
import Carousel from "./_components/layout/Carousel";
import Body from "./_components/layout/Body";

export default function Page() {
  return (
    <>
    <div className = "flex flex-col justify-center items-center">
      <Carousel />
      <Body />
      </div>
    </>
  );
}
