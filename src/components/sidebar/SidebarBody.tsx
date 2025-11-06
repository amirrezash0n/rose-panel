import SidebarMenu from "./SidebarMenu";

export default function SidebarBody() {
  return (
    <>
      {" "}
      {/* Line */}
      <svg className="h-px">
        <use href="#dashed-line"></use>
      </svg>
      {/* User Info */}
      <div className="mt-4 space-y-4 text-center text-lg leading-4">
        {/* Profile Picture */}
        <div className="relative w-fit mx-auto">
          <div className="size-[150px] border-[5px] border-neutral-50 dark:border-neutral-800 rounded-full overflow-hidden">
            <img
              id="admin-image-profile"
              className="size-full object-cover"
              src="../public/images/avatar-2.jpg"
              alt="تصویر کاربر"
            />
          </div>
          {/* Picture Circle */}
          <div className="absolute -bottom-0.5 right-7 size-6 border-[3px] border-neutral-50 dark:border-neutral-800 bg-green-500 rounded-full"></div>
        </div>
        {/* Welcome */}
        <p>
          <span id="admin-name">امیررضا شورورزی</span> خوش آمدی
        </p>
        {/* Username */}
        <p id="admin-username">amirrezash0n</p>
      </div>
      {/* Sidebar Menu */}
      <SidebarMenu />
    </>
  );
}
