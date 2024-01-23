"use client";

import { useState } from "react";
import ContextMenu from "../components/_ui/ContextMenu";

export default function ContextMenuT() {
  const [contextMenuVisible, setContextMenuVisible] = useState(false);

  const showContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setContextMenuVisible(true);
  };

  const closeContextMenu = () => {
    setContextMenuVisible(false);
  };

  return (
    <div>
      <h1>Context Menu</h1>

      <div>
        <button onContextMenu={showContextMenu}>Right-click me</button>
      </div>

      {contextMenuVisible && (
        <ContextMenu
          options={[
            {
              type: "action",
              label: "Option 1",
              action: () => console.log("Option 1 selected"),
            },
            {
              type: "action",
              label: "Option 2",
              action: () => console.log("Option 2 selected"),
            },
          ]}
          onClose={closeContextMenu}
        />
      )}
    </div>
  );
}
