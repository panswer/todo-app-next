import { ReactElement } from "react";
import IconComponent from "../../atoms/icon/icon";

const HeaderComponent = (): ReactElement => {
  return (
    <header className="flex flex-row justify-between items-center w-xs mb-3">
      <h1 className="uppercase font-bold text-xl">todo</h1>

      <button className="hover:cursor-pointer">
        <IconComponent type="moon" />
      </button>
    </header>
  );
};

export default HeaderComponent;
