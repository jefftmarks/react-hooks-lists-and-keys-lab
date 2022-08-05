import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navElements = links.map((linkName) => {
    return <a key={linkName} href={`#${linkName}`}>{linkName}</a>
  })

  return (
    <nav>
      {navElements}
    </nav>
  )
}

export default NavBar;
