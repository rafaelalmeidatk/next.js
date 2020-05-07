import Link from 'next/link';

const Navbar = () =>(
    <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
    <div className="container">
      <a className="navbar-brand" href="#"><h3>Pet Care</h3></a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/new"><a className="nav-link"><h3>Add Pet</h3></a></Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;