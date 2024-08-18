import "./index.css";
import { Stepper } from "./stepper/Stepper";

export const App = () => {
  return (
    <div>
      <div className="bg-green-900 text-white px-[16px] h-[80px] flex items-center">
        Top navigation
      </div>
      <Stepper />
      <div className="h-[2000px]"></div>
      <div className="bg-red-300 text-white px-[16px] h-[50px] flex items-center">
        Footer
      </div>
    </div>
  );
};

export default App;
