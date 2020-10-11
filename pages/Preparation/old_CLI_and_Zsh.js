import React from "react";
import Card from "../../components/Card";
import SelectCard from "../../components/SelectCard";
//import CLI from "../../data/cards/preparation/CLI";
//import Jason from "../../data/cards/preparation/CLI.json";

//export default function CliAndZsh({ content }) {
export default function CliAndZsh() {
  //console.log(Jason.["card-2"]);
  return (
    <div>
      <h1> JSON Statham </h1>
      {}
      {/*}
      <p>{CLI[0].aHref} </p>
      <h1>{content.title}</h1>
      <p>{content.p1}</p>
      <p>{content.p2}</p>
      <br />
      <br />
      <br />
      <h1> { card.title}</h1>
      <p> { card.alt}</p>
      <p> { card.text } </p>
      {*/}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Card cardData={SelectCard("CLI", "card-1")} />
      <Card cardData={SelectCard("CLI", "card-2")} />
    </div>
  );
}

//<Card cardData={{card}}/>
//<Card cardData={SelectCard("CLI", 0)} />
//export async function getStaticProps(content, card) {
//export async function getStaticProps(context) {
//export async function getStaticProps() {
  //console.log(Jason["card-1"])
  //return {
    //props: {
      //CLI,
      //Jason,
    //},
  //};
  //return {
  //props: {
  //content: {
  //title: "CLI and Zsh",
  //p1: "This is the CLI and *nix page.",
  //p2:
  //"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet commodo nulla facilisi. Pulvinar sapien et ligula ullamcorper malesuada proin. Fringilla est ullamcorper eget nulla facilisi. Et netus et malesuada fames ac turpis egestas sed tempus. Felis donec et odio pellentesque diam. Diam maecenas sed enim ut. Lorem sed risus ultricies tristique nulla. Nec ultrices dui sapien eget mi proin sed libero. Et tortor consequat id porta nibh venenatis cras.",
  //p3: "Amet facilisis magna etiam tempor. Enim lobortis scelerisque fermentum dui faucibus in ornare. Eu feugiat pretium nibh ipsum consequat. Ultrices gravida dictum fusce ut placerat orci nulla. Ante in nibh mauris cursus mattis molestie a iaculis. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Et molestie ac feugiat sed lectus vestibulum. In nisl nisi scelerisque eu ultrices vitae. Senectus et netus et malesuada fames ac. Eget nullam non nisi est sit amet facilisis magna etiam. Id cursus metus aliquam eleifend mi. Nunc id cursus metus aliquam eleifend mi in. Purus sit amet luctus venenatis lectus magna fringilla urna. Sem et tortor consequat id porta. Aliquam faucibus purus in massa tempor nec feugiat. Egestas fringilla phasellus faucibus scelerisque. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Mi tempus imperdiet nulla malesuada.",
  //alt: "If this get's picked up then that's good!"
  //},
  //card: {
  //aHref: "https://lym.readthedocs.io/en/latest/",
  //imgSrc: "/images/preparation/cli/LCLFYAM.png",
  //title: "Linux CLI FYAM",
  //text: "An online book for linux command lines. Good reference material.",
  //alt: "If this get's picked up then that's good!"
  //}
  //},
  //};
//}
