import RichTextEditor from 'reactjs-tiptap-editor';
import { extensions } from '@/utils';

import 'reactjs-tiptap-editor/style.css';

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
