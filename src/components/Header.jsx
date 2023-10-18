import React, {useState } from "react";
const headerNav = [
    {
        title : "intro",
        url : "#intro"
    },
    {
        title : "skill",
        url : "#skill"
    },
    {
        title : "site",
        url : "#site"
    },
    {
        title : "port",
        url : "#port"
    },
    {
        title : "contact",
        url : "#contact"
    },

];

const Header = () => {

    const [show, setShow] = useState(false);

    function toggleMenu() {
        setShow(!show);
    }

  return (
    <header id="header" role="banner">
        <div className="header__inner">
            <div className="header__logo">
                <h1>
                    <a href="/">portfolio<em>react.js</em></a>
                </h1>
            </div>
            <nav
                role="navigation" 
                aria-label="메인메뉴"
                className={`header__nav ${show === true ? 'show':''}`}
            >
                <ul>
                    {headerNav.map((navText, key)=>{
                        return(
                            <li key={key}>
                                <a href={navText.url}>{navText.title}</a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <div 
                className="header__nav__mobile"
                id="headerToggle"
                aria-controls="primary-menu"
                aria-expanded={show === true ? "true" : "false"}
                role="button"
                tabIndex="0"
                onClick={()=>{
                    toggleMenu();
                }}
            >
                <span></span>
            </div>
        </div>
    </header>
  )
}

export default Header