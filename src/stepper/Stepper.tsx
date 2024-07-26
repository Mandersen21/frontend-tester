import { useEffect, useRef, useState } from "react";

export const Stepper = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [top, setTop] = useState<number>(0);

  const someRef = useRef<HTMLDivElement>(null);

  const topPosition = someRef && someRef.current?.getBoundingClientRect().top;

  useEffect(() => {
    const onScroll = () => {
      setTop(someRef?.current?.getBoundingClientRect().top ?? 0);
    };

    window.addEventListener("scroll", onScroll);
  }, []);

  console.log("Top", topPosition);

  return (
    <>
      <div className="sticky top-0 flex flex-col">
        <div className="bg-blue-800 h-[100px]">
          Stepper open: {isOpen ? "Yes" : "No"}
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="h-[50px] bg-yellow-700 relative"
        >
          <div>Some content</div>
          <div ref={someRef}></div>
          {isOpen && (
            <div
              style={{
                height: `calc(100vh - ${topPosition?.toString()}px - 24px)`,
              }}
              className={`bg-red-300 absolute top-[50px] p-[16px] left-0 right-0`}
            >
              <div className="bg-red-600 h-full flex flex-col p-[16px]">
                <div>Top content</div>
                <div className="mt-auto">Buttom content</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
