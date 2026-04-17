import React from "react";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[70vh] rounded-2xl my-8 container mx-auto">
      <div className="space-y-3 flex items-center justify-center flex-col">

      <h1 className="text-5xl font-bold ">Friends to keep close in your life</h1>
      <p className="font-semibold text-center">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the <br /> relationships that matter most.
      </p> <br />
      <button className="btn btn-primary font-semibold"> + Add a Friend</button>
      </div>
    </div>
  );
};

export default Banner;
