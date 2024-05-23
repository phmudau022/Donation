import Link from "next/link";
import React from "react";

export const NavLink = (props: NavLInkProps) => {
  const { title, url } = props;

  return (
    <Link href={`/${url}`}
    className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
    >
        {title}
    </Link>
  )
};

type NavLInkProps = {
  url: string;
  title: string;
};
