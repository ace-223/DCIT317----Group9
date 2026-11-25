// Owner: Role 2 - Browse & Search Developer
// Reused on Browse and Profile. Item shape: see docs/API_CONTRACT.md
import { Link } from 'react-router-dom'

export default function ItemCard({ item }) {
  // TODO (Role 2): image, status badge, location, date, styling
  return (
    <article className="item-card">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <Link to={`/items/${item.id}`}>View details</Link>
    </article>
  )
}
