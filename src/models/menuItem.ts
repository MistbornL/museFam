import { ReactNode } from "react";

export type MenuItemsProps = {
  setActive: (active: boolean) => void;
  showMenu: () => void;
  active: boolean;
  navItems: Navitem[];
  children?: ReactNode;
};
