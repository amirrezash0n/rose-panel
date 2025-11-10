import type { FC, SVGProps } from "react";
import {
  Box1,
  BoxTick,
  Category,
  Category2,
  Headphone,
  Home2,
  Messages3,
  Profile2User,
  ReceiptDiscount,
  Setting2,
  Tag,
  Tag2,
  TicketDiscount,
  TruckFast,
  UserAdd,
} from "iconsax-reactjs";

type IconComponent = FC<SVGProps<SVGSVGElement>>;

interface sidebarLinksProps {
  id: number;
  title: string;
  href: string;
  icon: IconComponent;
}

export const sidebarLinks: sidebarLinksProps[] = [
  { id: 1, title: "پیشخوان", href: "/dashboard", icon: Home2 },

  { id: 2, title: "تخفیف‌ها", href: "/discounts", icon: TicketDiscount },
  {
    id: 3,
    title: "افزودن تخفیف",
    href: "/discounts/add",
    icon: ReceiptDiscount,
  },

  { id: 4, title: "برچسب‌ها", href: "/tags", icon: Tag },
  { id: 5, title: "افزودن برچسب", href: "/tags/add", icon: Tag2 },

  { id: 6, title: "محصولات", href: "/products", icon: Box1 },
  { id: 7, title: "افزودن محصول", href: "/products/add", icon: BoxTick },

  { id: 8, title: "دسته‌بندی‌ها", href: "/categories", icon: Category },
  {
    id: 9,
    title: "افزودن دسته‌بندی",
    href: "/categories/add",
    icon: Category2,
  },

  { id: 10, title: "کاربران", href: "/users", icon: Profile2User },
  { id: 11, title: "افزودن ادمین", href: "/admins/add", icon: UserAdd },

  { id: 12, title: "سفارشات", href: "/orders", icon: TruckFast },

  { id: 13, title: "تیکت‌ها", href: "/tickets", icon: Headphone },
  { id: 14, title: "دیدگاه‌ها", href: "/comments", icon: Messages3 },

  { id: 15, title: "تنظیمات", href: "/settings", icon: Setting2 },
];
