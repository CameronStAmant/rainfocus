import styles from "./megaNav.module.scss";
import type { dataProps } from "../types/Navigation";
import NavItem from "../NavItem/NavItem";
import { useState } from "react";

const DATA: dataProps[] = [
  {
    title: "Guide",
    id: 1,
  },
  {
    title: "Attendees",
    id: 2,
    subMenus: [
      {
        title: "Attendees",
        id: 3,
      },
      {
        title: "Attendee types",
        id: 4,
      },
      {
        title: "Packages",
        id: 5,
      },
      {
        title: "Reg codes",
        id: 6,
      },
      {
        title: "Discounts",
        id: 7,
      },
    ],
  },
  {
    title: "Content",
    id: 8,
  },
  {
    title: "Exhibitors",
    id: 9,
  },
];

const MegaNav = () => {
  const [isActive, setIsActive] = useState<number | null>(null);
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  return (
    <nav className={styles.root}>
      <ul className={styles.navList}>
        {DATA.map((item) => (
          <NavItem
            key={item.id}
            isActive={isActive}
            setIsActive={setIsActive}
            openMenuId={openMenuId}
            setOpenMenuId={setOpenMenuId}
            item={item}
          />
        ))}
      </ul>
    </nav>
  );
};

export default MegaNav;
