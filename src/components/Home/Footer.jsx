import React from "react";

const Footer = () => {

  const handleClicked = () =>{
    window.open('https://pitamchandra.github.io/portfolio/', '_blank')
  }
  return (
    <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 sticky bottom-0">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <a href="https://flowbite.com" className="hover:underline">
          RANCO™
        </a>
        . All Rights Reserved.
      </span>
      <span>
        <h3 onClick={handleClicked} className="text-xl cursor-pointer bg-gradient-to-l from-sky-500 to-purple-700 text-transparent bg-clip-text">Pitam Chandra</h3>
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 ">
            About
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Licensing
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
