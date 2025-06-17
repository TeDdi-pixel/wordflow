import React, { ReactNode } from "react";

type TypeProps = {
  icon: ReactNode;
  name: string;
};

const FormName = ({ name, icon }: TypeProps) => {
  return (
    <div className="text-text flex gap-2 items-center">
      <span>{icon}</span>
      <h3>{name}</h3>
    </div>
  );
};

export default FormName;
