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
    placeholder: {
      showOnlyCurrent: true,
    },
    characterCount: {
      limit: 2000,
    },
  }),
  Bold,
  Italic,
  Underline,
  Blockquote,
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

export const TiptapEditor: React.FC<{
  value: string;
  onChange: (value: string) => void;
}> = ({ value, onChange }) => {
  return (
    <RichTextEditor
      output='html'
      content={value}
      onChangeContent={onChange}
      extensions={extensions}
      removeDefaultWrapper={true}
    />
  );
};
