/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import Page from 'Page';
import HTMLFlipBook from 'react-pageflip';

import prevBtn from 'assets/images/prevBtn.svg';
import nextBtn from 'assets/images/nextBtn.svg';
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
import { useCallback, useEffect, useRef, useState } from 'react';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    }
  }, []);

  const bookRef = useRef();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  // @ts-ignore
  const onInit = useCallback(() => {
    if (bookRef && bookRef.current) {
      // @ts-ignore
      setTotalPages(bookRef.current.pageFlip().getPageCount());
    }
  }, []);

  const onFlip = useCallback(() => {
    if (bookRef && bookRef.current) {
      // @ts-ignore
      setCurrentPage(bookRef.current.pageFlip().getCurrentPageIndex() + 1);
    }
  }, []);

  const handlePrevBtnClick = useCallback(() => {
    if (bookRef && bookRef.current) {
      // @ts-ignore
      bookRef.current.pageFlip().flipPrev();
    }
  }, []);

  const handleNextBtnClick = useCallback(() => {
    if (bookRef && bookRef.current) {
      // @ts-ignore
      bookRef.current.pageFlip().flipNext();
    }
  }, []);

  return (
    <main className="flex flex-col gap-22 md:gap-28 justify-start md:justify-center min-h-screen md:py-60 py-30 items-center overflow-hidden bg-[#D4D4D4]">
      <h1 className="font-bold text-left text-24 md:text-36 w-320 md:w-[1194px]">
        I.M.LAB. 제품 통합 카달로그
      </h1>
      <section className="w-320 md:w-[1194px] flex justify-between">
        <button
          type="button"
          className="text-16 md:text-20 md:p-12 font-bold leading-[160%] tracking-[-0.2px] text-white px-10 py-4 bg-[#D84231] rounded-[8px]"
        >
          <a
            href="https://firebasestorage.googleapis.com/v0/b/imlab-web-homepage.appspot.com/o/pdf%2F%EC%95%84%EC%9D%B4%EC%97%A0%EB%9E%A9_%EB%94%94%EC%A7%80%ED%84%B8%EC%B9%B4%EB%8B%AC%EB%A1%9C%EA%B7%B8.pdf?alt=media&token=29fda917-c2f1-4d31-9d8f-91d507a344f2"
            target="_blank"
            rel="noreferrer"
          >
            PDF 다운로드
          </a>
        </button>
        <div className="flex items-center justify-center gap-8">
          <button
            disabled={currentPage === 1}
            type="button"
            onClick={handlePrevBtnClick}
          >
            <img
              src={prevBtn}
              className="w-25 md:w-40 h-25 md:h-40"
              alt="previous page button"
            />
          </button>
          <div className="text-14 md:text-20 font-semibold leading-[160%] tracking-[-0.2px]">
            {currentPage} / {totalPages}
          </div>
          <button
            disabled={currentPage === 12}
            type="button"
            onClick={handleNextBtnClick}
          >
            <img
              src={nextBtn}
              className="w-25 md:w-40 h-25 md:h-40"
              alt="next page button"
            />
          </button>
        </div>
      </section>
      <section className="border-2 w-320 md:w-[1194px] overflow-hidden h-fit flex items-center justify-center">
        {/* @ts-ignore */}
        <HTMLFlipBook
          width={isMobile ? 320 : 595}
          height={isMobile ? 453 : 842}
          showCover
          mobileScrollSupport
          onFlip={onFlip}
          ref={bookRef}
          onInit={onInit}
        >
          <Page src={cover_front} cover />
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
          <Page src={cover_back} cover />
        </HTMLFlipBook>
      </section>
    </main>
  );
};

export default App;
