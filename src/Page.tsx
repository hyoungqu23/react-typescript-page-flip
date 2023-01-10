import React from 'react';

type Props = {
  src: string;
};

const Page = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <div className="relative w-full h-full overflow-hidden" ref={ref}>
      <img
        className="w-full h-full object-contain"
        src={props.src}
        alt="test"
      />
    </div>
  );
});

Page.displayName = 'Page';

export default Page;
