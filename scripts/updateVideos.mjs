import fs from "node:fs";
import { stringify } from "yaml";

const videoPath = (slug) => `./src/content/recursos/${slug}.mdx`;

const videos = [];

let nextPagePath = null;
do {
  const listUrl = `https://www.cooparaje.com.ar/page-data/${
    nextPagePath ? `${nextPagePath}` : "recursos"
  }/page-data.json`;
  const listRes = await (await fetch(listUrl)).json();
  for (const item of listRes.result.data.allContentfulRecursos.edges ?? []) {
    if (!fs.existsSync(videoPath(item.node.slug))) {
      videos.push(item.node.slug);
    }
  }
  nextPagePath = listRes.result.pageContext.nextPagePath;
} while (nextPagePath);

videos
  .map((videoId) =>
    fetch(
      `https://www.cooparaje.com.ar/page-data/recursos/${videoId}/page-data.json`
    ).then((resp) => resp.json())
  )

  .reduce(async (acc, cur) => {
    const data = await cur;
    const firstItem = data.result.data.contentfulRecursos;
    if (firstItem?.slug) {
      const { title, slug, excerpt, tags, url, featuredImg, espacio } = firstItem;
      fs.writeFileSync(
        videoPath(slug),
`---
${stringify({
title,
featuredImg: featuredImg.file.url,
tags,
space: espacio,
url,
})}---
${excerpt.excerpt}
`
      );
    }
  }, Promise.resolve());

const videoFiles = fs.readdirSync("./src/content/recursos");
fs.writeFileSync(
  "./src/content/recursos.ts",
  `export enum ResoursesIDsType { ${videoFiles
    .map((v) => `"${v}" = "${v}"`)
    .join(", ")} };`
);
