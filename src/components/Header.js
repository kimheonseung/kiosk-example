import { FaHome } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";

const Header = () => {
  return (
    <>
      <nav className="header">
        <div className="home">
          <FaHome />
        </div>
        <div className="title">
          EasyKOISK
        </div>
        <div className="lang">
          <MdLanguage /> LANG
        </div>
      </nav>
    </>
  )
}

export default Header