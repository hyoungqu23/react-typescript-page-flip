/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import Page from 'Page';
import HTMLFlipBook from 'react-pageflip';

import aed from 'assets/images/d_catalog_aed.jpg';
import aok from 'assets/images/d_catalog_aok.jpg';
import class01 from 'assets/images/d_catalog_class01.jpg';
import class02 from 'assets/images/d_catalog_class02.jpg';
import class03 from 'assets/images/d_catalog_class03.jpg';
import cover_back from 'assets/images/d_catalog_cover_back.jpg';
import cover_front from 'assets/images/d_catalog_cover_front.jpg';
import cube01 from 'assets/images/d_catalog_cube01.jpg';
import cube02 from 'assets/images/d_catalog_cube02.jpg';
import cube03 from 'assets/images/d_catalog_cube03.jpg';
import kiosk from 'assets/images/d_catalog_kiosk.jpg';
import remote from 'assets/images/d_catalog_remote.jpg';

const App = () => {
  return (
    <main className="flex flex-col gap-32 justify-center items-center overflow-hidden">
      <h1 className="text-blue-400 text-32 font-bold">IMLAB BROCHURE</h1>
      <section className="border-2 w-[1200px] h-fit flex items-center justify-center">
        {/* @ts-ignore */}
        <HTMLFlipBook width={595} height={842}>
          <Page src={cover_front} />
          <Page src={aok} />
          <Page src={remote} />
          <Page src={class01} />
          <Page src={class02} />
          <Page src={class03} />
          <Page src={cube01} />
          <Page src={cube02} />
          <Page src={cube03} />
          <Page src={kiosk} />
          <Page src={aed} />
          <Page src={cover_back} />
        </HTMLFlipBook>
      </section>
    </main>
  );
};

export default App;
