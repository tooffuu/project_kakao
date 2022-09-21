import React from "react";

const Page = () => {
  const paging = (e) => {
    const offset = e.target.dataset.index;
    console.log(e.target.dataset.index);
  };
  return <div></div>;
};

export default Page;
