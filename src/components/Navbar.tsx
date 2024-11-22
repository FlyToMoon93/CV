import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Khalil Ibesh</div>
      <ul className="nav-links">
        <li><Link href="#about">Über Mich</Link></li>
        <li><Link href="#projects">Projekte</Link></li>
        <li><Link href="#resume">Lebenslauf</Link></li>
        <li><Link href="#contact">Kontakt</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
