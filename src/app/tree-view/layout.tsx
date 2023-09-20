import TreeView from "../components/TreeView/tree-view";

export default function TreeViewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative container mx-auto max-w-7xl z-10 px-6 min-h-[calc(100vh_-_64px_-_108px)] mb-12 flex-grow">
      <div className="grid grid-cols-12">
        <TreeView className="hidden relative lg:block lg:col-span-2 mt-8 pr-4" />
        {children}
      </div>
    </main>
  );
}
