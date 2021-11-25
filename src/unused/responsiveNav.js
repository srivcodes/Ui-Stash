import { useState } from "react";

export const ResponsiveNav = (navItems) => {
  const [isopened, setIsOpened] = useState(false);
  let display;
  if (isopened) {
    display = "flex";
  } else {
    display = "none";
  }
  return (
    <section className="sidebar ">
      <h3 style={{ color: "black" }}>Ui-stash components!</h3>
      <button
        className="button button--icon fas fa-chevron-down "
        onClick={() => (isopened ? setIsOpened(false) : setIsOpened(true))}
      ></button>
      <nav style={{ display: display }}>
        {navItems.navItems.map((item) => (
          <li className="list list--stacked">
            <a href="#">{item}</a>
          </li>
        ))}
      </nav>
    </section>
  );
};
