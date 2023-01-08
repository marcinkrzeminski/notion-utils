const { Client } = require("@notionhq/client");
const dotenv = require("dotenv").config();

const notion = new Client({ auth: process.env.KEY });
const databaseId = process.env.DB_ID;

async function getDuplicates(db) {
  let hasMoreItems = true;
  let lastCursor = undefined;
  let items = {};

  while (hasMoreItems) {
    const response = await notion.databases.query({
      database_id: db,
      start_cursor: lastCursor,
    });

    response.results.forEach((item) => {
      const url = item.properties.URL.url;

      if (url && !(url in items)) {
        items[url] = [];
      }

      if (items[url]) {
        items[url].push(item.id);
      }
    });

    hasMoreItems = response.has_more;
    lastCursor = response.next_cursor;
  }

  for (const item in items) {
    if (items[item].length < 2) {
      delete items[item];
    } else {
      items[item].reverse().shift();
    }
  }

  return items;
}

getDuplicates(databaseId).then((items) => {
  Object.values(items).forEach((value) => {
    value.forEach(async (id) => {
      await notion.pages.update({ page_id: id, archived: true });
    });
  });
});
