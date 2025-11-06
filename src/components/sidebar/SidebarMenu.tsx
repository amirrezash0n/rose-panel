import { ArrowLeft2 } from "iconsax-reactjs";
import { sidebarLinks } from "../../data/sidebarMenu";

export default function SidebarMenu() {
  return (
    <ul className="my-4 space-y-1 text-xl/5 h-full">
      {sidebarLinks.map((link) => {
        const IconComponent = link.icon;
        // panel-sidebar-menu__item--active
        return (
          <li key={link.title}>
            <a
              href={link.href}
              className="flex items-center justify-between h-11 mr-2 pr-2 pl-[18px] rounded-r-full"
            >
              <div className="flex gap-2">
                <IconComponent />
                <span>{link.title}</span>
              </div>
              <ArrowLeft2 size="16" color="#ffffff" variant="Bold" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
