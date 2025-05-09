import React from "react";
import Button from "../components/ui/Button";

const NotFound = () => {
  return (
    <section className="p-0 h-dvh relative">
      <div className="absolute left-1/2 top-1/2 -translate-1/2 max-w-[520px] w-full leading-[1.4] text-center">
        <div className="relative h-[200px] mb-5 mx-auto">
          <h1 className="text-[236px] font-montserrat font-extralight m-0 text-sndry-800 uppercase absolute left-1/2 top-1/2 -translate-1/2">
            oops!
          </h1>
          <h2 className="font-montserrat text-[28px] font-normal uppercase text-sndry-700 bg-white py-2.5 px-[5px] m-auto inline-block absolute bottom-0 right-0 left-0 box-border">
            404 - Page can't be found
          </h2>
        </div>
        <Button className="rounded-none bg-primary text-white hover:bg-primary-950 hover:text-white font-bold font-montserrat text-lg">
          Back to Home
        </Button>
      </div>
    </section>
  );
};

export default NotFound;
