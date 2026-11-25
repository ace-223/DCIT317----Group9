// Owner: Team Lead (structure) / Role 1 (visual styling). Do not add links without asking the lead.
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-brand">UG Lost &amp; Found</h1>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/browse">Browse Items</NavLink>
        <NavLink to="/report-lost">Report Lost</NavLink>
        <NavLink to="/report-found">Report Found</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    </nav>
  )
}
