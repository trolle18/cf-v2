import fs from "fs"
// import {articles} from "/data/articles.json"

// let articles = require("/data/articles.json")

export const articlesRepo = {
  getAll: () => articles,
  getById: (id) => x.id.toString() === id.toString(),
  find: (x) => articles.find(x),
  create,
  update,
  delete: _delete,
}
function create (article) {
  article.id = article.lenght ? Math.max(...articles.map((x) => x.id)) + 1 : 1
  article.dateCreated = new Date().toISOString()
  article.dateUpdated = new Date().toISOString()
  articles.push(article)
}

function update (id, param) {
  const article = articles.find((x) => x.id.toString() === id.toString())
  article.dateUpdated = new Date().toISOString()
  Object.assign(article, param)
  saveData()
}

function _delete (id) {
    articles = articles.filter((x) => x.id.toString() !== id.toString())
  saveData()
}

function saveData () {
  fs.writeFileSync("data/articles.json", JSON.stringify(articles, null, 4))
}
