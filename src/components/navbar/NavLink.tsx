'use client'
import Link from "next/link";
import React, {useState, useEffect} from "react";
import { usePathname } from "next/navigation";

export const NavLink = (props: NavLInkProps) => {
  const { title, url } = props;
  const [active, setActive] = useState<boolean>(false)

  const pathName = usePathname();
  console.log(pathName)
  const pathLocation =  pathName.split('/')[1];

  console.log(pathLocation, url)

  useEffect(() => {

    if(pathLocation === url){
      setActive(true)
    }
    else{
      setActive(false)
    }
  }, [url, pathLocation])


  return (
    <Link href={`/${url}`}
    className={active ? "text-gray-900 underline hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium" : 
    "text-gray-900 hover:text-gray-700 px-3 no-underline py-2 rounded-md text-sm font-medium"

    }
    >
        {title}
    </Link>
  )
};

type NavLInkProps = {
  url: string;
  title: string;
};
