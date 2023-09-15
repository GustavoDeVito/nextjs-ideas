"use client";

export default function Captcha() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Oii");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xs m-10 flex flex-col">
      <input
        type="email"
        placeholder="Email:"
        className="p-1 border rounded-md border-gray-500 bg-neutral-200 placeholder:text-gray-600 "
      />

      <button
        type="submit"
        className="mt-5 p-1 border rounded-md text-white bg-red-600 hover:bg-red-500 focus:bg-red-700"
      >
        Submit
      </button>
    </form>
  );
}
