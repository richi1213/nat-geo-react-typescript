import { ImpactContent, ImpactGeneralHeading } from '.';

export const WhatWeDo: React.FC = () => {
  return (
    <section>
      <article className='mx-auto my-10 w-full max-w-5xl'>
        <ImpactGeneralHeading />
        <ImpactContent />
      </article>
    </section>
  );
};
