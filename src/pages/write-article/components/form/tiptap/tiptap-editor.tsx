import { useState } from 'react';
import RichTextEditor, {
  BaseKit,
  Blockquote,
  Bold,
  Italic,
  Underline,
  HorizontalRule,
  TextDirection,
  Heading,
  BulletList,
  OrderedList,
  Iframe,
  LineHeight,
  Image,
  Video,
} from 'reactjs-tiptap-editor';

import 'reactjs-tiptap-editor/style.css';

const extensions = [
  BaseKit.configure({
    // Show placeholder
    placeholder: {
      showOnlyCurrent: true,
    },

    // Character count
    characterCount: {
      limit: 2000,
    },
  }),
  Blockquote,
  Bold,
  Italic,
  Underline,
  HorizontalRule,
  TextDirection,
  Heading.configure({ spacer: true }),
  BulletList,
  OrderedList,
  Iframe,
  LineHeight,
  Image.configure({
    upload: (files: File) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(URL.createObjectURL(files));
        }, 500);
      });
    },
  }),
  Video.configure({
    upload: (files: File) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(URL.createObjectURL(files));
        }, 500);
      });
    },
  }),
];

export const TiptapEditor: React.FC = () => {
  const [content, setContent] = useState('');

  const onChangeContent = (value: any) => {
    setContent(value);
  };

  return (
    <RichTextEditor
      output='html'
      content={content}
      onChangeContent={onChangeContent}
      extensions={extensions}
    />
  );
};
