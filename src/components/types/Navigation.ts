export type NavigationItemData = {
  title: string;
  id: number;
  subMenus?: {
    title: string;
    id: number;
  }[];
};
