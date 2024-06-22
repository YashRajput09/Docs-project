import Card from "./Card";
import React, { useRef, useState } from "react";

function Forground() {
  const ref = useRef(null);
  const data = [
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
      filesize: ".8mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "" },
    },

    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "upload", tagColor: "blue" },
    },

    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
      filesize: ".3mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
  ];
  return (
    <div
      ref={ref}
      className="w-full h-full fixed top-0 left-0 z-[3] flex gap-2 p-5 flex-wrap"
    >
      {data.map((item, index) => (
        <Card data={item} reference={ref} key={index} />
      ))}
    </div>
  );
}

export default Forground;
