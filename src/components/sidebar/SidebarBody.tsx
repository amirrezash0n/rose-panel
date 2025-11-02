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
              src="#"
              alt="تصویر کاربر"
            />
          </div>
          {/* Picture Circle */}
          <div className="absolute -bottom-0.5 right-7 size-6 border-[3px] border-neutral-50 dark:border-neutral-800 bg-green-500 rounded-full"></div>
        </div>
        {/* Welcome */}
        <p>
          <span id="admin-name">{/* Loaded From Js */}</span> خوش آمدی
        </p>
        {/* Username */}
        <p id="admin-username">{/* Loaded From Js */}</p>
      </div>
      {/* Sidebar Menu */}
      <ul className="my-4 space-y-1 text-xl/5 h-full">
        <li>
          <a
            href="./index.html"
            className="flex items-center justify-between h-11 mr-2 pr-2 pl-[18px] rounded-r-full panel-sidebar-menu__item--active"
          >
            <div className="flex gap-2">
              <svg className="size-6">
                <use href="#home-2"></use>
              </svg>
              <span>پیشخوان</span>
            </div>
            <svg className="size-[18px]">
              <use href="#arrow-left"></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="discounts.html"
            className="flex items-center justify-between h-11 mr-2 pr-2 pl-[18px] rounded-r-full sm:hover:bg-rose-400 transition-colors"
          >
            <div className="flex gap-2">
              <svg className="size-6">
                <use href="#discount"></use>
              </svg>
              <span>تخفیف ها</span>
            </div>
            <svg className="size-[18px]">
              <use href="#arrow-left"></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="add-discount.html"
            className="flex items-center justify-between h-11 mr-2 pr-2 pl-[18px] rounded-r-full sm:hover:bg-rose-400 transition-colors"
          >
            <div className="flex gap-2">
              <svg className="size-6">
                <use href="#discount"></use>
              </svg>
              <span>افزودن تخفیف</span>
            </div>
            <svg className="size-[18px]">
              <use href="#arrow-left"></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="tags.html"
            className="flex items-center justify-between h-11 mr-2 pr-2 pl-[18px] rounded-r-full sm:hover:bg-rose-400 transition-colors"
          >
            <div className="flex gap-2">
              <svg className="size-6">
                <use href="#tag"></use>
              </svg>
              <span>بر چسب ها</span>
            </div>
            <svg className="size-[18px]">
              <use href="#arrow-left"></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="add-tag.html"
            className="flex items-center justify-between h-11 mr-2 pr-2 pl-[18px] rounded-r-full sm:hover:bg-rose-400 transition-colors"
          >
            <div className="flex gap-2">
              <svg className="size-6">
                <use href="#tag"></use>
              </svg>
              <span>افزودن برچسب</span>
            </div>
            <svg className="size-[18px]">
              <use href="#arrow-left"></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="./products.html"
            className="flex items-center justify-between h-11 mr-2 pr-2 pl-[18px] rounded-r-full sm:hover:bg-rose-400 transition-colors"
          >
            <div className="flex gap-2">
              <svg className="size-6">
                <use href="#box"></use>
              </svg>
              <span>محصولات</span>
            </div>
            <svg className="size-[18px]">
              <use href="#arrow-left"></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="add-category.html"
            className="flex items-center justify-between h-11 mr-2 pr-2 pl-[18px] rounded-r-full sm:hover:bg-rose-400 transition-colors"
          >
            <div className="flex gap-2">
              <svg className="size-6">
                <use href="#categories"></use>
              </svg>
              <span>افزودن دسته بندی</span>
            </div>
            <svg className="size-[18px]">
              <use href="#arrow-left"></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="categories.html"
            className="flex items-center justify-between h-11 mr-2 pr-2 pl-[18px] rounded-r-full sm:hover:bg-rose-400 transition-colors"
          >
            <div className="flex gap-2">
              <svg className="size-6">
                <use href="#categories"></use>
              </svg>
              <span>دسته بندی ها</span>
            </div>
            <svg className="size-[18px]">
              <use href="#arrow-left"></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="./add-product.html"
            className="flex items-center justify-between h-11 mr-2 pr-2 pl-[18px] rounded-r-full sm:hover:bg-rose-400 transition-colors"
          >
            <div className="flex gap-2">
              <svg className="size-6">
                <use href="#box-tick"></use>
              </svg>
              <span>افزودن محصول</span>
            </div>
            <svg className="size-[18px]">
              <use href="#arrow-left"></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="./users.html"
            className="flex items-center justify-between h-11 mr-2 pr-2 pl-[18px] rounded-r-full sm:hover:bg-rose-400 transition-colors"
          >
            <div className="flex gap-2">
              <svg className="size-6">
                <use href="#profile-2user"></use>
              </svg>
              <span>کاربران</span>
            </div>
            <svg className="size-[18px]">
              <use href="#arrow-left"></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="./add-user.html"
            className="flex items-center justify-between h-11 mr-2 pr-2 pl-[18px] rounded-r-full sm:hover:bg-rose-400 transition-colors"
          >
            <div className="flex gap-2">
              <svg className="size-6">
                <use href="#user-add"></use>
              </svg>
              <span>افزودن ادمین</span>
            </div>
            <svg className="size-[18px]">
              <use href="#arrow-left"></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="./orders.html"
            className="flex items-center justify-between h-11 mr-2 pr-2 pl-[18px] rounded-r-full sm:hover:bg-rose-400 transition-colors"
          >
            <div className="flex gap-2">
              <svg className="size-6">
                <use href="#truck-fast"></use>
              </svg>
              <span>سفارشات</span>
            </div>
            <svg className="size-[18px]">
              <use href="#arrow-left"></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="./tickets.html"
            className="flex items-center justify-between h-11 mr-2 pr-2 pl-[18px] rounded-r-full sm:hover:bg-rose-400 transition-colors"
          >
            <div className="flex gap-2">
              <svg className="size-6">
                <use href="#headphone"></use>
              </svg>
              <span>تیکت ها</span>
            </div>
            <svg className="size-[18px]">
              <use href="#arrow-left"></use>
            </svg>
          </a>
          <a
            href="./comments.html"
            className="flex items-center justify-between h-11 mr-2 pr-2 pl-[18px] rounded-r-full sm:hover:bg-rose-400 transition-colors"
          >
            <div className="flex gap-2">
              <svg className="size-6">
                <use href="#messages-3"></use>
              </svg>
              <span>دیدگاه ها</span>
            </div>
            <svg className="size-[18px]">
              <use href="#arrow-left"></use>
            </svg>
          </a>
          <a
            href="./settings.html"
            className="flex items-center justify-between h-11 mr-2 pr-2 pl-[18px] rounded-r-full sm:hover:bg-rose-400 transition-colors"
          >
            <div className="flex gap-2">
              <svg className="size-6">
                <use href="#setting-2"></use>
              </svg>
              <span>تنظیمات</span>
            </div>
            <svg className="size-[18px]">
              <use href="#arrow-left"></use>
            </svg>
          </a>
        </li>
      </ul>
    </>
  );
}
