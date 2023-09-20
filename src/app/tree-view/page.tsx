"use client";

import { ChevronDownIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
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
        url: "#sub-item-1.1",
      },
      {
        name: "SubItem 1.2",
        url: "#sub-item-1.2",
      },
    ],
  },
  {
    name: "Item 2",
    children: [
      {
        name: "SubItem 2.1",
        url: "#sub-item-2.1",
      },
      {
        name: "SubItem 2.2",
        url: "#sub-item-2.2",
      },
    ],
  },
];

const SubTree = ({ tree }: SubTreeProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFolder = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="transition duration-300 ease-in-out">
      <span
        onClick={toggleFolder}
        className="cursor-pointer flex items-center transition"
      >
        {tree.name}
        <ChevronDownIcon
          className={`w-4 h-4 text-gray-600 ml-2 transition ${
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
            <span className="bg-gray-600 opacity-90 rounded-full h-1 w-1 mr-2 transition"></span>
            <Link
              href={url}
              className="flex items-center text-gray-600 transition"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default function TreeView() {
  return (
    <div className="select-none w-fit p-6">
      <ul>
        {tree.map((item) => (
          <SubTree key={item.name} tree={item} />
        ))}
      </ul>
    </div>
  );
}
