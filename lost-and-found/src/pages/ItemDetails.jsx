// Owner: Role 4 - Item Details, Claims & Admin Developer
import { useParams } from 'react-router-dom'

export default function ItemDetails() {
  const { id } = useParams()

  return (
    <section>
      <h2>Item Details</h2>
      <p>Showing item with id: {id}</p>
      <p>TODO: fetch the item with getItem(id), show full details, claim button and form.</p>
    </section>
  )
}
