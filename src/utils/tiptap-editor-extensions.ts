import {
  BaseKit,
  Blockquote,
  Bold,
  BulletList,
  Heading,
  Image,
  HorizontalRule,
  Iframe,
  Italic,
  LineHeight,
  OrderedList,
  TextDirection,
  Underline,
  Video,
} from 'reactjs-tiptap-editor';

export const extensions = [
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
