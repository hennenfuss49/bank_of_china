import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            Home
            <Link to="/about">About</Link>
        </div>
    )
}
