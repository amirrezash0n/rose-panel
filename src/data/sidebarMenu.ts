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
  { id: 1, title: "پیشخوان", href: "/", icon: Home2 },
  { id: 2, title: "تخفیف ها", href: "/discounts", icon: TicketDiscount },
  {
    id: 1,
    title: "افزودن تخفیف",
    href: "/add-discount",
    icon: ReceiptDiscount,
  },
  { id: 3, title: "برچست ها", href: "/tags", icon: Tag },
  { id: 4, title: "افزودن برچسب", href: "/add-tag", icon: Tag2 },
  { id: 5, title: "محصولات", href: "/products", icon: Box1 },
  { id: 6, title: "افزودن دسته بندی", href: "/categories", icon: Category },
  { id: 7, title: "دسته بندی ها", href: "/add-category", icon: Category2 },
  { id: 8, title: "افزودن محصول", href: "/add-product", icon: BoxTick },
  { id: 9, title: "کاربران", href: "/users", icon: Profile2User },
  { id: 10, title: "افزودن ادمین", href: "/add-admin", icon: UserAdd },
  { id: 11, title: "سفارشات", href: "/orders", icon: TruckFast },
  { id: 12, title: "تیکت ها", href: "/tickets", icon: Headphone },
  { id: 13, title: "دیدگاه ها", href: "/comments", icon: Messages3 },
  { id: 14, title: "تنظیمات", href: "/settings", icon: Setting2 },
];
