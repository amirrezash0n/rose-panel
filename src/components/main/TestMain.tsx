export default function TestMain() {
  return (
    <div className="space-y-6">
      {/* Main Header: Sidebar Open Btn | Buttons */}
      <div className="flex items-center justify-between md:justify-end text-neutral-800">
        {/* Sidebar Open btn */}
        <button
          id="sidebar-open-btn"
          className="md:hidden p-2 bg-rose-100 rounded-full sm:cursor-pointer sm:hover:bg-rose-200 transition-colors"
        >
          <svg className="size-5">
            <use href="#menu"></use>
          </svg>
        </button>

        {/* Buttons: Theme | notification | search*/}
        <div className="flex items-center gap-2.5">
          {/* Theme Btn */}
          <button
            className="theme-btn p-2 bg-rose-100 rounded-full sm:cursor-pointer sm:hover:bg-rose-200 transition-colors"
            data-theme="dark"
          >
            <svg id="moon-icon" className="size-5">
              <use href="#moon"></use>
            </svg>
            <svg id="sun-icon" className="hidden size-5">
              <use href="#sun"></use>
            </svg>
          </button>

          {/* Notification Btn */}
          <div className="relative">
            <button
              id="notification-btn"
              className="p-2.5 bg-rose-100 rounded-full sm:cursor-pointer sm:hover:bg-rose-200 transition-color relative"
            >
              <svg className="size-5">
                <use href="#notification"></use>
              </svg>
              <div
                id="notif-counter"
                className="absolute -top-1 right-px min-w-3 h-3 p-0.5 flex items-center justify-center bg-rose-500 text-xs rounded-full text-rose-50"
              >
                0
              </div>
            </button>

            {/* Notification Messages */}
            <div
              id="notif-modal"
              className="hidden z-50 absolute p-2.5 w-[300px] max-h-[220px] -left-[50px] ring-0 top-[45px] overflow-y-auto dark:text-neutral-950 text-neutral-50 dark:bg-neutral-50 bg-neutral-800 transition-all rounded-xl"
            >
              {/* Loaded From Js */}
            </div>
          </div>

          {/* Search Btn */}
          <button className="p-2 bg-rose-100 rounded-full sm:cursor-pointer sm:hover:bg-rose-200 transition-color">
            <svg className="size-5">
              <use href="#search-normal"></use>
            </svg>
          </button>
        </div>
      </div>

      {/* Stats: Products | Users | comments | Tickets  */}
      <div className="grid 2xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 font-vazirMedium">
        {/* Products Count*/}
        <div className="border border-neutral-300 py-4 px-2 rounded-2xl">
          <div className="xs:text-xl flex gap-1.5">
            <svg className="size-5 xs:size-6">
              <use href="#box-line"></use>
            </svg>
            <span>تعداد محصولات</span>
          </div>
          <div className="text-sm xs:text-base flex justify-end">
            25,000 محصول
          </div>
        </div>

        {/* Users Count*/}
        <div className="border border-neutral-300 py-4 px-2 rounded-2xl">
          <div className="xs:text-xl flex gap-1.5">
            <svg className="size-5 xs:size-6">
              <use href="#profile-2user"></use>
            </svg>
            <span>تعداد کاربران</span>
          </div>
          <div className="text-sm xs:text-base flex justify-end">
            55,000 کاربر
          </div>
        </div>

        {/* Comments Count */}
        <div className="border border-neutral-300 py-4 px-2 rounded-2xl">
          <div className="xs:text-xl flex gap-1.5">
            <svg className="size-5 xs:size-6">
              <use href="#messages-3"></use>
            </svg>
            <span>تعداد نظرات</span>
          </div>
          <div className="text-sm xs:text-base flex justify-end">
            70,000 نظر
          </div>
        </div>

        {/* Tickets Count */}
        <div className="border border-neutral-300 py-4 px-2 rounded-2xl">
          <div className="xs:text-xl flex gap-1.5">
            <svg className="size-5 xs:size-6">
              <use href="#ticket"></use>
            </svg>
            <span>تعداد تیکت ها</span>
          </div>
          <div className="text-sm xs:text-base flex justify-end">
            35,000 تیکت
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="p-5 border border-neutral-300 rounded-2xl">
        {/* Head */}
        <div className="flex flex-col xs:flex-row gap-4 items-center justify-between font-vazirMedium mb-6">
          <h2 className="text-xl">فروش این ماه (1403)</h2>
          <a href="#" className="flex items-center">
            <span className="text-rose-500 text-lg sm:hover:text-rose-700 transition-colors">
              نمودار کامل
            </span>
            <svg className="size-6 text-rose-700">
              <use href="#arrow-left-outline"></use>
            </svg>
          </a>
        </div>
        {/* Chart */}
        <div id="sell-chart"></div>
      </div>

      {/* Info: Most active user | most popular product | Most viewed Article*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-4 gap-x-8 font-vazirMedium">
        {/* Most active user*/}
        <div className="border border-neutral-300 p-4 text-lg 2xs:text-xl font-vazirMedium rounded-2xl">
          {/* Title */}
          <p>فعال ترین کاربر سایت</p>

          {/* Image and info */}
          <div className="flex items-center gap-2 mt-4 relative">
            <img
              className="size-20 2xs:size-[91px] rounded-2xl object-cover"
              src="../images/avatar-2.jpg"
              alt="تصویر کاربر"
            />
            {/* Circle */}
            <div className="absolute -right-0.5 -bottom-2 size-5 bg-green-500 border-2 border-neutral-50 dark:border-neutral-800 rounded-full"></div>
            <div>
              <p>ساناز رضایی</p>
              <p className="mt-0.5">۲۰ ساعت در هفته</p>
            </div>
          </div>
        </div>

        {/* Most Popular Product*/}
        <div className="border border-neutral-300 p-4 text-lg 2xs:text-xl font-vazirMedium rounded-2xl">
          {/* Title */}
          <p>محبوب ترین محصول</p>

          {/* Image and info */}
          <div className="flex items-center gap-2 mt-4">
            <img
              className="size-20 2xs:size-[91px] rounded-2xl object-cover"
              src="../images/atletico-shirt.png"
              alt="تصویر محصول"
            />
            <div>
              <p>کیت اول اتلتیکو</p>
              <p className="mt-0.5">232,000 تومان</p>
            </div>
          </div>
        </div>

        {/* Most viewed Article */}
        <div className="border border-neutral-300 p-4 text-lg 2xs:text-xl font-vazirMedium rounded-2xl">
          {/* Title */}
          <p>پربازدیدترین مقاله</p>

          {/* Image and info */}
          <div className="flex items-center gap-2 mt-4">
            <img
              className="size-20 2xs:size-[91px] rounded-2xl object-cover"
              src="../images/body-building.jpg"
              alt="تصویر مقاله"
            />
            <div>
              <p>تنیس حرفه ای</p>
              <p className="mt-0.5">430 بازدید در روز</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
