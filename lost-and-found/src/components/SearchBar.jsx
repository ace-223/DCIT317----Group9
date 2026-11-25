// Owner: Role 2 - Browse & Search Developer
export default function SearchBar({ value = '', onChange }) {
  return (
    <input
      type="search"
      placeholder="Search lost and found items..."
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
    />
  )
}
