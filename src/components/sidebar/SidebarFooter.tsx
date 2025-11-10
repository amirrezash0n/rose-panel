import { Logout } from "iconsax-reactjs";

export default function SidebarFooter() {
  return (
    <div
      id="logout-btn"
      className="flex gap-1 w-max mx-auto text-xl/5 p-2 rounded-full cursor-pointer sm:hover:bg-rose-400 transition-colors"
    >
      <Logout />
      <span>خروج از حساب</span>
    </div>
  );
}
