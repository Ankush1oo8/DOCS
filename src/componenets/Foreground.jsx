import React, { useRef, useState } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      desc: "Hi there learning react Now This is great",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        color: "green",
      },
    },
    {
      desc: "Hi there learning react Now This is great",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        color: "green",
      },
    },
    {
      desc: "Hi there learning react Now This is great",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        color: "green",
      },
    },
  ];
  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full flex flex-wrap gap-10 h-screen p-5 "
    >
      {data.map((item, index) => (
        <Card data={item} refrence={ref} />
      ))}
    </div>
  );
}

export default Foreground;
