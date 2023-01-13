
export default function articlesHandler( req, res ) {
  const { query } = req
  const { id } = query
  const filtered = articles.filter((data) => data.id === id)

  // User with id exists
  return filtered.length > 0
    ? res.status(200).json(filtered[0])
    : res.status(404).json({ message: `article with id: ${id} not found.` })
}