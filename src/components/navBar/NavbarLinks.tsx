type Link = {
  id: number;
  name: string;
  url: string;
};

export const NavbarLinks = () => {
  const links: Link[] = [
    { id: 1, name: 'Home', url: '#' },
    { id: 2, name: 'About', url: '#' },
    { id: 3, name: 'Services', url: '#' },
    { id: 4, name: 'Work', url: '#' },
  ];

  return (
    <ul className="navbar-links">
      {links?.map(({ id, name, url }) => (
        <li className="navbar-link" key={id}>
          <a href={url}>{name}</a>
        </li>
      ))}
    </ul>
  );
};
