import React from "react";
import { Navbar, Button, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa6";

const Header = () => {
  const path = useLocation();

  return (
    <Navbar className="border-b-2 border-gray-200 dark:border-gray-700">
      <Link
        to={"/"}
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg">
          Hassan's
        </span>
        Blog
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Seach..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button color="gray" className="h-10 w-12 lg:hidden" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2 ">
        <Button
          className="w-12 h-10 hidden sm:inline first-letter:"
          color="gray"
          pill
        >
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button
            gradientDuoTone="purpleToBlue"
            outline
            className="&:hover: text-black"
          >
            SignIn
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={Link} to={"/"} active={path.pathname === "/"}>
          Home
        </Navbar.Link>
        <Navbar.Link
          active={path.pathname === "/about"}
          as={Link}
          to={"/about"}
        >
          About
        </Navbar.Link>
        <Navbar.Link
          active={path.pathname === "/projects"}
          as={Link}
          to={"/projects"}
        >
          Projects
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
