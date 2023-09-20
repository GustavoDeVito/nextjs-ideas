"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";

type SubTreeProps = {
  tree: { name: string; children: { name: string; url: string }[] };
};

const tree: SubTreeProps["tree"][] = [
  {
    name: "Item 1",
    children: [
      {
        name: "SubItem 1.1",
        url: "/tree-view/sub-1.1",
      },
      {
        name: "SubItem 1.2",
        url: "/tree-view/sub-1.2",
      },
    ],
  },
  {
    name: "Item 2",
    children: [
      {
        name: "SubItem 2.1",
        url: "/tree-view/sub-2.1",
      },
      {
        name: "SubItem 2.2",
        url: "/tree-view/sub-2.2",
      },
    ],
  },
];

const SubTree = ({ tree }: SubTreeProps) => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(true);

  const toggleFolder = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="transition duration-300 ease-in-out font-medium">
      <span
        onClick={toggleFolder}
        className="cursor-pointer flex items-center transition"
      >
        {tree.name}
        <ChevronDownIcon
          className={`w-4 h-4 text-gray-600 text-opacity-70 ml-2 transition ${
            isOpen ? "rotate-0" : "rotate-90"
          }`}
        />
      </span>
      <ul
        className={`ml-4 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {tree.children.map(({ name, url }) => (
          <li key={name} className="flex items-center transition py-1">
            <span
              className={`bg-gray-600 rounded-full h-1 w-1 mr-2 transition ${
                pathname === url ? "bg-opacity-100" : "bg-opacity-60"
              }`}
            ></span>
            <Link
              href={url}
              className={`flex items-center text-gray-600 transition ${
                pathname === url ? "text-opacity-100" : "text-opacity-70"
              }`}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default function TreeView({ className }: { className?: string }) {
  return (
    <div className={`select-none ${className}`}>
      <div className="lg:fixed lg:top-20 mt-2 z-0 lg:h-[calc(100vh-121px)]">
      <ul className="flex flex-col gap-4 scrollbar-hide lg:overflow-y-scroll lg:max-h-[calc(100vh_-_64px)] pb-28">
        {tree.map((item) => (
          <SubTree key={item.name} tree={item} />
        ))}
      </ul>
      </div>
    </div>
  );
}
