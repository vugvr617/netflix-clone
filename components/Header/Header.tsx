import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { useAppDispatch } from "../../store/hooks";
import { setUser } from "../../store/usersReducer";
import { useRouter } from "next/router";
import { auth } from "../../firebase";
import { SearchIcon, BellIcon } from "@heroicons/react/solid";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const checkScroll = (): void => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", checkScroll);

    return () => {
      removeEventListener("scroll", checkScroll);
    };
  }, []);

  const logout = async () => {
    signOut(auth)
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="flex flex-row items-center space-x-2 md:space-x-10">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5977/5977590.png"
          width={130}
          className="cursor-pointer"
        />
        <ul className="hidden space-x-4 md:flex flex-row">
          <li className="header-link font-semibold text-[white]">Home</li>
          <li className="header-link">TV Shows</li>
          <li className="header-link">Movies</li>
          <li className="header-link">New & Popular</li>
          <li className="header-link">My List</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 font-light">
        <SearchIcon className="hidden text-[#e5e5e5] h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="text-[#e5e5e5] h-6 w-6" />
        <Link href="/login" onClick={logout}>
          <img
            src="https://i.pinimg.com/736x/db/70/dc/db70dc468af8c93749d1f587d74dcb08.jpg"
            alt="profile-picture"
            className="cursor-pointer h-6 w-6 rounded"
          ></img>
        </Link>
      </div>
    </header>
  );
};

export default Header;
