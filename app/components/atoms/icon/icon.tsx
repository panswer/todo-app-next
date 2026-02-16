import MoonIcon from "../../../images/icon-moon.svg";
import SunIcon from "../../../images/icon-sun.svg";
import CrossIcon from "../../../images/icon-cross.svg";
import CheckIcon from "../../../images/icon-check.svg";

export type IconType = "moon" | "sun" | "cross" | "check";

interface IconProps {
  type: IconType;
}

const IconComponent = ({ type }: IconProps) => {
  const icons: Record<IconType, any> = {
    moon: MoonIcon,
    sun: SunIcon,
    cross: CrossIcon,
    check: CheckIcon,
  };

  return <img src={icons[type]?.src} alt="icon" className="w-3 h-3" />;
};

export default IconComponent;
