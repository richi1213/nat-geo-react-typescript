export const SingleArticleContent: React.FC<{ content: string }> = ({
  content,
}) => {
  return (
    <div className='mx-auto w-full max-w-5xl px-4 lg:mt-14'>
      <div
        className='prose max-w-none'
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};
