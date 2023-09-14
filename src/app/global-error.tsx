"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <h4>{error.message}</h4>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
