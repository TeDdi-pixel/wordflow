import React, { ReactNode } from "react";

type TypeProps = {
  icon: ReactNode;
  name: string;
};

const AuthFormName = ({ name, icon }: TypeProps) => {
  return (
    <div className="text-text flex gap-2 items-center ml-[2px] md:w-full">
      <span>{icon}</span>
      <h3>{name}</h3>
    </div>
  );
};

export default AuthFormName;
