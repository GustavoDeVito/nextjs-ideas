"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Toolbar } from "./ToolBar";
import Heading from "@tiptap/extension-heading";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";

export default function Content() {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({}),
      Document.configure({}),
      Paragraph.configure({}),
      Text.configure({}),
      Heading.configure({
        HTMLAttributes: {
          class: "text-xl font-bold",
          levels: [2],
        },
      }),
      BulletList.configure({
        HTMLAttributes: {
          class: "list-disc list-inside",
        },
      }),
      OrderedList.configure({
        HTMLAttributes: {
          class: "list-decimal list-inside",
        },
      }),
      ListItem.configure({}),
    ],
    content: "<ol class='list-decimal list-inside'><li class='block'>Ola</li></ol>",
    editorProps: {
      attributes: {
        class: "rounded-md border min-h-[150px] border-input bg-back p-2",
      },
    },
    onUpdate({ editor }) {
      console.log(editor.getHTML());
    },
  });

  return (
    <div className="flex flex-col justify-stretch min-h-[250px] m-10 py-5">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
