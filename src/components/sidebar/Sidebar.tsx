import SidebarBody from "./SidebarBody";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";

function Sidebar() {
  return (
    <aside className="panel__sidebar">
      <SidebarHeader />

      <SidebarBody />

      <SidebarFooter />
    </aside>
  );
}

export default Sidebar;
