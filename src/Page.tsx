/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';

type Props = {
  src: string;
  cover?: boolean;
};

const Page = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <div
      className="relative w-full h-full overflow-hidden"
      data-density={props.cover ? 'hard' : 'soft'}
      ref={ref}
    >
      <img className="w-full h-full" src={props.src} alt="test" />
    </div>
  );
});

Page.displayName = 'Page';

export default Page;
