import Link from 'next/link';

const NavLink = (props) => (
  <Link href="/[slug]" as={`/${props.url}`}>
    <a>{props.title}</a>
  </Link>
);

const Header = () => {
  return (
    <React.Fragment>
      <nav>
        <h1>Photos</h1>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Portfolio</a>
            </Link>
          </li>

          <li>
            <NavLink key="about" url="about" title="About" />
          </li>
        </ul>
      </nav>
      <hr />
    </React.Fragment>
  );
};

export default Header;
