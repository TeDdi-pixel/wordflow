"use client";

import { useState, useRef, useEffect } from "react";

const LanguageSelect = ({
  defaultLanguage,
  id,
  label,
}: {
  defaultLanguage: "ENG" | "UA" | string;
  id: string;
  label: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultLanguage);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value: string) => {
    setSelected(value);
    setIsOpen(false);
  };

  return (
    <div className="w-full mb-[32px]">
      <div ref={dropdownRef} className="flex items-center gap-4">
        <label htmlFor={id} className="">
          {label}
        </label>
        <div
          className="relative max-w-[120px] w-full group"
          onMouseLeave={() => setIsOpen(false)}
        >
          <button
            id={id}
            type="button"
            className="border-6 border-background w-full text-center py-[6px] px-[12px] bg-foreground rounded-2xl"
            onMouseEnter={() => setIsOpen(true)}
          >
            {selected}
          </button>

          {isOpen && (
            <ul className="max-w-[120px] w-full absolute shadow-md z-10 flex flex-col border-6 border-background rounded-2xl transition-all ease-out duration-150 scale-80 group-hover:scale-100 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
              {["ENG", "UA", "RU"]
                .filter((lang) => lang !== selected)
                .map((lang) => (
                  <li
                    key={lang}
                    className="w-full p-2 text-center hover:bg-background-accent-2 hover:text-text-2 bg-foreground last:rounded-b-default first:rounded-t-default text-text cursor-pointer"
                    onClick={() => handleSelect(lang)}
                  >
                    {lang}
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelect;
