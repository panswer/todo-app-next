"use client"

import { ReactElement, useCallback, useEffect, useState } from "react";
import checkImg from '@/app/images/icon-check.svg';

interface ToDoCheckParams {
  id: string;
  checked: boolean;
  clickEvent: () => void;
}

const ToDoCheckComponent = ({
  checked,
  id,
  clickEvent
}: ToDoCheckParams): ReactElement => {
  const [classes, setClasses] = useState<string>('');

  useEffect(() => {
    const defaultClasses = 'w-5 h-5 border-1 border-gray-300 rounded-full flex align-center justify-center p-1 hover:cursor-pointer dark:border-gray-600';

    if (checked) {
      setClasses(`${defaultClasses} bg-linear-135 from-blue-400 to-pink-500`);
    } else {
      setClasses(defaultClasses);
    }
  }, [checked]);

  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    clickEvent();
  }, [clickEvent]);

  return (
    <button className={classes} onClick={handleClick}>
      {checked ? <img src={checkImg.src} alt="check icon" /> : <></>}
    </button>
  );
};

export default ToDoCheckComponent;
