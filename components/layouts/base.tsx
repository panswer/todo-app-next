import { ReactElement } from "react";

interface BaseLayoutParams {
  children?: ReactElement;
}

const BaseLayout = ({ children }: BaseLayoutParams): ReactElement => (
  <div className="min-h-screen">
    <div className="flex flex-row">
      <div
        className="bg-top bg-no-repeat bg-cover w-full h-64 absolute top-0 left-0 z-0 bg-[url('/images/bg-mobile-light.jpg')] dark:bg-[url('/images/bg-mobile-dark.jpg')] md:bg-[url('/images/bg-desktop-light.jpg')] md:dark:bg-[url('/images/bg-desktop-dark.jpg')]"
      ></div>
    </div>
    <main className="min-h-screen relative z-10 flex items-center justify-center flex-col">
      {children}
    </main>
  </div>
);

export default BaseLayout;
