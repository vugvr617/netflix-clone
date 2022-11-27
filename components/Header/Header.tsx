const Header = () => {
  return (
    <header>
      <div className="flex flex-row items-center space-x-2 md:space-x-10 px-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5977/5977590.png"
          width={130}
          className="cursor-pointer"
        />
        <ul className="hidden space-x-2 md:flex flex-row">
          <li className="header-link">Home</li>
          <li className="header-link">TV Shows</li>
          <li className="header-link">Movies</li>
          <li className="header-link">New & Popular</li>
          <li className="header-link">My List</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
