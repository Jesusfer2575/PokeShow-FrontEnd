import React from 'react';
import '../components/styles/navbar.css';
interface Props {
  routes: string[];
}
enum index {
  Home = 0,
  Add,
  Update,
  Delete,
}

const Navbar: React.FC<Props> = ({ routes }: Props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-custom-1 text-light">
        <a className="navbar-brand" href={routes[index.Home]}>
          PokeShow
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href={routes[index.Add]}>
                New capture <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
