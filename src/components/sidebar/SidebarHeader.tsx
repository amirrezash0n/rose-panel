export default function SidebarHeader() {
  return (
    <div className="flex items-center justify-between md:justify-center px-2">
      <a id="shark-sport-site" className="block w-52 md:w-64 shrink-0" href="#">
        <img className="w-full" src="../images/logo.png" alt="logo" />
      </a>
      <svg
        id="sidebar-close-btn"
        className="size-10 md:hidden sm:cursor-pointer"
      >
        <use href="#close-circle"></use>
      </svg>
    </div>
  );
}
