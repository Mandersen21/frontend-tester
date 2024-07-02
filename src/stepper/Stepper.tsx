import { useState } from "react";

export const Stepper = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col">
      <div
        className="bg-gray-300 p-[16px] relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        Stepper open: {isOpen ? "Yes" : "No"}
      </div>
      {isOpen && (
        <div className="bg-red-300 absolute bottom-0 left-0 right-0 h-[200px]">
          This is open
        </div>
      )}
    </div>
  );
};
