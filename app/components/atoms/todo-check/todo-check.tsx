import { ReactElement, useCallback } from "react";

interface ToDoCheckParams {
  id: string;
  checked: boolean;
  clickEvent: (id: string) => void;
}

const ToDoCheckComponent = ({
  checked,
  id,
  clickEvent
}: ToDoCheckParams): ReactElement => {
  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    clickEvent(id);
  }, [clickEvent]);

  return (
    <button className={
      checked ?
        "w-5 h-5 border-1 border-blue-400 rounded-full bg-blue-400" :
        "w-5 h-5 border-1 border-blue-400 rounded-full"
    } onClick={handleClick}></button>
  );
};

export default ToDoCheckComponent;
