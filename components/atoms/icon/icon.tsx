import MoonIcon from "@/app/images/icon-moon.svg";
import SunIcon from "@/app/images/icon-sun.svg";
import CrossIcon from "@/app/images/icon-cross.svg";
import CheckIcon from "@/app/images/icon-check.svg";
import { ReactElement } from "react";

export type IconType = "moon" | "sun" | "cross" | "check";

interface IconProps {
  type: IconType;
  classImg?: string;
}

const IconComponent = ({ type, classImg = '' }: IconProps): ReactElement => {
  const icons: Record<IconType, any> = {
    moon: MoonIcon,
    sun: SunIcon,
    cross: CrossIcon,
    check: CheckIcon,
  };

  return <img src={icons[type]?.src} alt="icon" className={"w-3 h-3" + ` ${classImg}`} />;
};

export default IconComponent;
