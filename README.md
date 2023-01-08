⚠️⚠️⚠️ Use with caution! **Always make a copy of your data before running these scripts!** ⚠️⚠️⚠️

# Quick setup

1. Clone the repo: `git clone git@github.com:marcinkrzeminski/notion-utils.git`
2. Go into the directory: `cd notion-utils`
3. Make your own `.env` from the example: `mv .env.example .env`
4. Generate integration token key at https://www.notion.so/my-integrations and set the `KEY` value in the `.env` file
5. Get the Database ID and set the `DB_ID` value in the `.env` file
   1. Open the database page in Notion
   2. Hit `cmd + shift + L` or `ctrl + shift + L` to copy current page URL
   3. Paste the URL in Notepad. The URL looks like this https://www.notion.so/<long_hash_1>?v=<long_hash_2>. The `long_hash_1` is your database id.

# Available utils
- `remove-duplicates.js`

---

##  Remove duplicates

Remove duplicates by the `URL` field. Useful when you have some kind of bookmarks collection or something similar.

Trigger the `node remove-duplicates.js` from the command line to remove duplicates.

---

⚠️⚠️⚠️ Use with caution! **Always make a copy of your data before running these scripts!** ⚠️⚠️⚠️