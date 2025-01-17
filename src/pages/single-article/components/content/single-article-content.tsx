export const SingleArticleContent: React.FC<{ content: string }> = ({
  content,
}) => {
  return (
    <div className=''>
      <div
        className='prose max-w-none'
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};
