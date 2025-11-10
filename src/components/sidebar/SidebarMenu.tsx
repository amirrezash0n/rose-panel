import { ArrowLeft2 } from "iconsax-reactjs";
import { sidebarLinks } from "../../data/sidebarMenu";
import { NavLink, useLocation } from "react-router";

export default function SidebarMenu() {
  const location = useLocation();

  return (
    <ul className="my-4 space-y-1 text-xl/5 h-full">
      {sidebarLinks.map((link) => {
        const IconComponent = link.icon;
        const isActive = location.pathname === link.href;

        return (
          <li key={link.title}>
            <NavLink
              to={link.href}
              className={`${
                isActive ? "panel-sidebar-menu__item--active" : ""
              } flex items-center justify-between h-11 mr-2 pr-2 pl-[18px] rounded-r-full`}
            >
              <div className="flex gap-2">
                <IconComponent />
                <span>{link.title}</span>
              </div>
              <ArrowLeft2
                size="16"
                color={isActive ? "#F43F5E" : "#ffffff"}
                variant="Bold"
              />
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
