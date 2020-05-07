import Link from 'next/link'

const Navbar = () => (
    <div className="navbar">
        <Link href="/">
            <a className="brand">
                <h3>Pet Care</h3>
            </a>
        </Link>
        <Link href="/new">
            <a className="add-pet">
                <h3>Add Pet</h3>
            </a>
        </Link>
    </div>
)
export default Navbar;