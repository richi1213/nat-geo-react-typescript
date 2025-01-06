import { InThisIssue, IssueGeneralHeading, IssueGrid } from '.';

export const Issue: React.FC = () => {
  return (
    <section className='flex justify-center bg-background px-4 py-14 text-foreground'>
      <div className='w-full max-w-5xl'>
        <IssueGeneralHeading />
        <div className='mt-6 grid gap-4 lg:grid-cols-12'>
          <IssueGrid />
          <InThisIssue />
        </div>
      </div>
    </section>
  );
};
