"use client";

import Link from "next/link";

export default function SubItem11() {
  return (
    <>
      <div className="col-span-12 lg:col-span-10 xl:col-span-8 lg:px-16 mt-10">
        <h1>SubItem 1.1</h1>
      </div>

      <div className="hidden z-10 xl:flex xl:col-span-2 mt-8 pl-4">
        <div className="fixed w-full max-w-[12rem] flex flex-col gap-4 text-left top-20 pb-20 h-[calc(100vh-121px)] scrollbar-hide overflow-y-scroll">
          <p className="text-sm">Nesta Página</p>
          <ul className="scrollbar-hide flex flex-col gap-2">
            <li data-active="true" className="transition-colors font-normal flex items-center text-sm text-default-500 dark:text-default-300 data-[active=true]:text-foreground dark:data-[active=true]:text-foreground before:content-[''] before:opacity-0 data-[active=true]:before:opacity-100 before:transition-opacity before:-ml-3 before:absolute before:bg-default-400 before:w-1 before:h-1 before:rounded-full pl-3">
              <Link href="#item-1">Item 1</Link>
            </li>
            <li className="transition-colors font-normal flex items-center text-sm text-default-500 dark:text-default-300 data-[active=true]:text-foreground dark:data-[active=true]:text-foreground before:content-[''] before:opacity-0 data-[active=true]:before:opacity-100 before:transition-opacity before:-ml-3 before:absolute before:bg-default-400 before:w-1 before:h-1 before:rounded-full pl-3">
              <Link href="#item-2">Item 2</Link>
            </li>
            <li className="transition-colors font-normal flex items-center text-sm text-default-500 dark:text-default-300 data-[active=true]:text-foreground dark:data-[active=true]:text-foreground before:content-[''] before:opacity-0 data-[active=true]:before:opacity-100 before:transition-opacity before:-ml-3 before:absolute before:bg-default-400 before:w-1 before:h-1 before:rounded-full pl-3">
              <Link href="#item-3">Item 3</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
