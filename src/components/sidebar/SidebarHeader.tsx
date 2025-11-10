// import { CloseCircle } from "iconsax-reactjs";

import { Link } from "react-router";

export default function SidebarHeader() {
  return (
    <div className="flex items-center justify-between md:justify-center px-2">
      <Link to="/" className="flex-center block w-52 mt-2 md:w-64 shrink-0">
        <span className="font-homenaje text-5xl">Rose Panel</span>
      </Link>

      {/* Close circle */}
      {/* <CloseCircle size="40" color="#101010" variant="Outline" /> */}
    </div>
  );
}
