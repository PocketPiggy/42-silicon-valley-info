import React from "react";
import Data from "../../data/pages/preparation/git.json";

export default function Git({ content }) {
  return (
    <div>
      <h1>{content.title}</h1>
      <div>
        <img
          src={Data.GitLogo.imgSrc}
          alt={Data.GitLogo.imgAlt}
          title={Data.GitLogo.title}
        />
      </div>
      <p>{content.p1}</p>
      <p>{content.p2}</p>
      <p>{content.p3}</p>
      <div>
        <img
          src={Data.GitExample.imgSrc}
          alt={Data.GitExample.imgAlt}
          title={Data.GitExample.title}
        />
      </div>

      <p>{content.p4}</p>
      <p>{content.p5}</p>
    </div>
  );
}

export async function getStaticProps(content) {
  console.log(content);
  return {
    props: {
      content: {
        title: "Git",
        p1: "One of the most important tools you'll be using during the Piscine, Git, is a version control system. What is version control? It's put simply, a way to manage and control changes within programs and other files. Git also allows you to take projects in different directions, while always keeping a backup of different versions.",
        p2: "An example could be a program, a camera app. Version 1.0 (master branch), you can take pictures.  In version 1.5 you can now record video but it doesn't have sound. Someone might want to add sound, so they take a copy of version 1.5 (fork or clone) and implement it themselves and make their own version 1.6 that can record video with sound. This is all while till having access to version 1.5. They also have the choice of being able to add those new changes to the older 1.5.",
        p3: "Another example would be instead of saving a file like, 'project.txt, project2.txt, final_project.txt, final_final_project.txt, final_final_done_project.txt', you could save changes of a file, without having to make a new file with a new name everytime.  All of that, while being able to see what changes you've made, as well as reverse them.",
        p4: "The Vogsphere, is how you will be turning in your assignments, which uses git. Below, I have the video from the Piscine which not only explains it in more detail but will go through a walkthrough on how to use it.",
        p5: "As a final note, the commands you'll use most ofter are: init, status, add, push, pull and commit. There are many more features of git, but knowing how to use these as well as understanding what branches are, is the bare minimum to get started successfully.",
      },
    },
  };
}
