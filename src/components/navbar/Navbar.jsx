import React from 'react';
import { logo } from '../../assets/index';
import { Link } from 'react-scroll';
import { navLinksdata } from '../../constants';

const Navbar = () => {
  return (
    <div className="w-full h-28 mx-auto sticky top-0 z-50 bg-bodyColor flex justify-between items-center font-titleFont border-b-[1px]  border-b-gray-600">
      <div>
        <img className="h-20 w-20 rounded-full" src={logo} alt="logo" />
      </div>
      <div>
        <ul className="flex items-center gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                to={link}
                smooth={true}
                spy={true}
                duration={500}
                offset={-70}
                activeClass="active"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
