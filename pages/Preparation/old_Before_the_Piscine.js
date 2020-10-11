import React from "react";
import ScrollingSideBar from "../../components/ScrollingSideBar";
import SelectScroll from '../../components/SelectScroll';
import Before from './before.json'

export default function BeforeThePiscine({ content, scroll }) {
  //    JS/React doesn't play well with SSR due to node not being browser,
  //    leading to trying to use something that doesn't exist.
  //    e.g. window, document.

  //if (typeof window !== "undefined") {
  //const allDivs = document.querySelectorAll(".dem-block");
  //console.log(allDivs);
  //}

  //console.log(scroll)
  return (
    <div>
      <h1>Before</h1>
      <div
        className="dem-block"
        id="block1"
        style={{ height: "50rem", border: "1px solid pink", width: "80%" }}
      >
        <p> 50rem block </p>
      </div>
      <div
        className="dem-block"
        id="block2"
        style={{ height: "20rem", border: "1px solid pink", width: "80%" }}
      >
        <p>20rem block </p>
      </div>
      <div
        className="dem-block"
        id="block3"
        style={{ height: "15rem", border: "1px solid pink", width: "80%" }}
      >
        <p>15rem block </p>
      </div>
      <div
        className="dem-block"
        id="block4"
        style={{ height: "5rem", border: "1px solid pink", width: "80%" }}
      >
        <p>5rem block </p>
      </div>
      <div
        className="dem-block"
        id="block5"
        style={{ height: "30rem", border: "1px solid pink", width: "80%" }}
      >
        <p>30rem block</p>
      </div>
      {/*}<ScrollingSideBar scrollData={Before} />
      <ScrollingSideBar scrollData={scroll} />
      <ScrollingSideBar scrollData={SelectScroll("Before")} />+{*/}
      <ScrollingSideBar scrollData={Before} />

    </div>
  );
}

//export async function getStaticProps(content) {
  //return {
    //props: {
      //content: {
        //title: "Before the Piscine",
        //p1: "This is the   page.",
      //},
      //Before
      //scroll: {
        //one: 'block1',
        //two: 'block2',
        //three: 'block3',
        //four: 'block4',
        //five: 'block5'
      //}
      //scroll: [
        //{ name: "block1" },
        //{ name: "block2" },
        //{ name: "block3" },
        //{ name: "block4" },
        //{ name: "block5" },
      //],
    //},
  //};
//}
