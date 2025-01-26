import RichTextEditor, {
  UseEditorOptions,
  useEditorState,
} from 'reactjs-tiptap-editor';
import { extensions } from '@/utils';

import 'reactjs-tiptap-editor/style.css';

const customOptions: UseEditorOptions = {
  editable: false,
  enablePasteRules: false,
  enableInputRules: false,
};

export const EditTiptapEditor: React.FC<{
  value: string;
  onChange: (value: string) => void;
}> = ({ value, onChange }) => {
  const { isReady, editor, editorRef } = useEditorState();

  const handleCustomButton = () => {
    if (editor) {
      const text = editor.getText();
      console.log('Current text:', text);
    }
  };
  return (
    <>
      <RichTextEditor
        dark={false}
        output='html'
        content={value}
        onChangeContent={onChange}
        useEditorOptions={customOptions}
        extensions={extensions}
        removeDefaultWrapper={true}
        ref={editorRef}
      />
      {isReady && (
        <button type='button' onClick={handleCustomButton}>
          Custom Action
        </button>
      )}
    </>
  );
};
