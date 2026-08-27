import type { dataProps } from "../types/Navigation";
import circleIcon from "../../assets/circle.svg";
import circleIconActive from "../../assets/circle-active.svg";
import styles from "./navItem.module.scss";

type Props = {
  isActive: number | null;
  setIsActive: (isActive: number | null) => void;
  openMenuId: number | null;
  setOpenMenuId: (id: number | null) => void;
  item: dataProps;
  isSubMenu?: boolean;
};

const NavItem = ({
  isActive,
  setIsActive,
  openMenuId,
  setOpenMenuId,
  item,
  isSubMenu,
}: Props) => {
  const handleClick = () => {
    if (item.subMenus) {
      setOpenMenuId(openMenuId === item.id ? null : item.id);
      setIsActive(item.id);
    } else {
      if (!isSubMenu) {
        setOpenMenuId(null);
      }
      setIsActive(item.id);
    }
  };

  return (
    <>
      <li
        className={`${styles.navItem} ${isActive === item.id ? styles.active : ""} ${isSubMenu ? styles.subMenuItem : ""}`}
        key={item.id}
        onClick={handleClick}
      >
        {!isSubMenu && (
          <img
            src={isActive === item.id ? circleIconActive : circleIcon}
            alt="circle icon"
          />
        )}
        <span className={styles.navItemText}>{item.title}</span>
      </li>
      {item.subMenus && openMenuId === item.id && (
        <ul className={styles.subMenu}>
          {item.subMenus.map((subMenu) => (
            <NavItem
              key={subMenu.id}
              isActive={isActive}
              setIsActive={setIsActive}
              openMenuId={openMenuId}
              setOpenMenuId={setOpenMenuId}
              item={subMenu}
              isSubMenu
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default NavItem;
