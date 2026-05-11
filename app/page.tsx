import Image from "next/image";
import Navbar from "./_components/layout/Header";
import Body from "./_components/layout/Body";

export default function Page() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Body />
      </div>
    </>
  );
}
