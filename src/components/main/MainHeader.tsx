import { SearchNormal, Notification, Moon, Sun } from "iconsax-reactjs";
import NotificationMesseges from "../messages/NotificationMesseges";
import { useState, useRef } from "react";
import { IoIosMenu } from "react-icons/io";

export default function MainHeader() {
  const [notification, setNotification] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  function showNotification() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setNotification(true);
  }

  function hideNotification() {
    timeoutRef.current = window.setTimeout(() => {
      setNotification(false);
    }, 200);
  }

  function handleNotificationMouseEnter() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  function handleNotificationMouseLeave() {
    hideNotification();
  }

  return (
    <div className="flex items-center justify-between lg:justify-self-end text-neutral-800">
      {/* Sidebar Open btn */}
      <div className="lg:hidden p-2 bg-rose-100 rounded-full sm:cursor-pointer sm:hover:bg-rose-200 transition-colors">
        <IoIosMenu className="size-6" />
      </div>
      {/* Buttons: Theme | notification | search */}
      <div className="flex items-center gap-2.5">
        {/* Theme Btn */}
        <div
          className="theme-btn p-2 bg-rose-100 rounded-full sm:cursor-pointer sm:hover:bg-rose-200 transition-colors"
          data-theme="dark"
        >
          <Moon />
          <Sun className="hidden" />
        </div>
        {/* Notification Container */}
        <div className="relative">
          <div
            onMouseEnter={showNotification}
            onMouseLeave={hideNotification}
            className="p-2 bg-rose-100 rounded-full sm:cursor-pointer sm:hover:bg-rose-200 transition-color relative"
          >
            <Notification />
            <div className="absolute -top-1 right-px min-w-3 h-3 p-0.5 flex items-center justify-center bg-rose-500 text-xs rounded-full text-rose-50">
              1
            </div>
          </div>

          {notification && (
            <div
              className="absolute left-0 top-full mt-1"
              onMouseEnter={handleNotificationMouseEnter}
              onMouseLeave={handleNotificationMouseLeave}
            >
              <NotificationMesseges isVisible={notification}>
                نوتیف تستی جهت نمایش
              </NotificationMesseges>
            </div>
          )}
        </div>
        {/* Search Btn */}
        <div className="p-2 bg-rose-100 rounded-full sm:cursor-pointer sm:hover:bg-rose-200 transition-color">
          <SearchNormal />
        </div>
      </div>
    </div>
  );
}
