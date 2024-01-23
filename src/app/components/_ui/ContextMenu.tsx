"use client";

import React, { useEffect } from "react";

interface ActionOption {
  type: 'action';
  label: string;
  action: () => void;
}

interface DividerOption {
  type: 'divider';
}

type Option = ActionOption | DividerOption;

type Props = {
  options:
  Option[];
  onClose: () => void;
};

export default function ContextMenu({ options, onClose }: Readonly<Props>) {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".context-menu")) {
        onClose();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="bg-white border border-gray-300 p-2 absolute shadow">
      {options?.map((option, index) => (
        <React.Fragment key={index}>
          {option.type === "action" ? (
            <div className="cursor-pointer hover:bg-gray-100 p-1">
              <button onClick={() => option.action()}>{option.label}</button>
            </div>
          ) : (
            <div className="border-t border-gray-200 my-1" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
