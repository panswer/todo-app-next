import { ReactElement } from "react";
import styles from "./style.module.css";

interface BaseLayoutParams {
  children?: ReactElement;
}

const BaseLayout = ({ children }: BaseLayoutParams): ReactElement => (
  <div className="min-h-screen">
    <div className="flex flex-row">
      <div
        className={
          "bg-contain bg-top bg-no-repeat bg-center w-full h-64 absolute z-100 " + styles.bgImage
        }
      ></div>
    </div>
    <main className="min-h-screen relative z-200 flex items-center justify-center flex-col">
      {children}
    </main>
  </div>
);

export default BaseLayout;
