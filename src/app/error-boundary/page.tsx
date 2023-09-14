"use client";

import { useErrorBoundary } from "react-error-boundary";

export default function ErrorBoundary() {
  const { showBoundary } = useErrorBoundary();

  return (
    <button className="m-10 p-1 border rounded-md bg-red-500 hover:bg-red-400 focus:bg-red-600" onClick={() => showBoundary("Force Error")}>
      Exec Error Boundary
    </button>
  );
}
