import "./index.css";
import { Stepper } from "./stepper/Stepper";

export const App = () => {
  return (
    <div>
      <div className="bg-green-900 text-white px-[16px] h-[80px] flex items-center">
        Header
      </div>
      <Stepper />
    </div>
  );
};

export default App;
