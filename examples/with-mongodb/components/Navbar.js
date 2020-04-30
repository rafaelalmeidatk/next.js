import Link from 'next/link'

const Navbar = () => (
    <div className="navbar">
        <div>
            <Link href="/">
                <a className="brand">Home</a>
            </Link>
        </div>
        <div>            
            <Link href="/new">
                <a className="add-pet">+</a>
            </Link>
        </div>
    </div>
)
export default Navbar;