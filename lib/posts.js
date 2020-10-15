import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from 'remark';
import html from 'remark-html';

const postsDir = path.join(process.cwd(), "_posts");

export function getSortedPostsData() {
  //    Get file name for posts
  const fileNames = fs.readdirSync(postsDir);
  const allPostsData = fileNames.map((fileName) => {
    //  Removes .md extension from name, then gets ID
    const id = fileName.replace(/\.md$/, "");

    //  Reads markdown file as a string
    const fullPath = path.join(postsDir, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    //  Makes gray-matter parse post metadata section
    const matterResult = matter(fileContents);

    //  Combines data with ID
    return {
      id,
      ...matterResult.data,
    };
  });
  //    Sorts posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostsIds() {
  const fileNames = fs.readdirSync(postsDir);
  //    Returns array with objects for each file containing an ID.
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDir, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  //    Gray matter parses the post metadata.
  const matterResult = matter(fileContents);

  //    Remark converts .md files into HTML
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  //    Combines the data with the id
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
