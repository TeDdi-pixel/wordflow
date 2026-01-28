"use client";

import { Language } from "@/shared/model/types/temp-store";
import { useLanguageSelectStore } from "@/shared/store/useLanguageSelect";
import { useTempStore } from "@/shared/store/useTempStore";
import { useEffect } from "react";

export const LanguageSelect = ({
  id,
  label,
}: {
  id: "source" | "target";
  label: string;
}) => {
  const source = useTempStore((state) => state.source);
  const target = useTempStore((state) => state.target);
  const setTermLang = useTempStore((state) => state.setTermLang);
  const setDefinitionLang = useTempStore((state) => state.setDefinitionLang);

  const selected = id === "source" ? source : target;

  const isOpened = useLanguageSelectStore((state) => state.isOpened);
  const openLanguageSelect = useLanguageSelectStore(
    (state) => state.openLanguageSelect,
  );
  const closeAllLanguageSelects = useLanguageSelectStore(
    (state) => state.closeAllLanguageSelects,
  );
  const handleSelect = (lang: Language) => {
    if (id === "source") {
      if (target === lang) setDefinitionLang(source);
      setTermLang(lang);
    } else {
      if (source === lang) setTermLang(target);
      setDefinitionLang(lang);
    }
    closeAllLanguageSelects();
  };

  useEffect(() => {
    if (!isOpened.length) return;

    const handleClickOutside = () => {
      closeAllLanguageSelects();
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpened.length, closeAllLanguageSelects]);

  return (
    <div className="w-full mb-3.5 md:mb-8">
      <div className="flex items-center gap-4 flex-col sm:flex-row">
        <label htmlFor={id} className="text-[14px] md:text-[16px]">
          {label}
        </label>

        <div className="relative sm:max-w-[120px] w-full select-none">
          <button
            id={id}
            type="button"
            className="border-2 cursor-pointer border-bg w-full text-center py-1 px-3 bg-fg rounded-default text-text hover:border-accent transition-colors"
            onClick={() => {
              closeAllLanguageSelects();
              openLanguageSelect(id);
            }}
          >
            {selected}
          </button>

          <ul
            onClick={(e) => e.stopPropagation()}
            className={`md:max-w-[120px] w-full absolute shadow-md flex flex-col border-4 border-bg rounded-default transition-all duration-200
    ${
      isOpened.includes(id)
        ? "scale-100 opacity-100 pointer-events-auto z-50"
        : "scale-80 opacity-0 pointer-events-none"
    }
  `}
          >
            {(["ENG", "UA", "RU"] as Language[])
              .filter((lang) => lang !== selected)
              .map((lang) => (
                <li
                  key={lang}
                  className="w-full py-1 px-3 text-center hover:bg-bg-accent-2 hover:text-text-2 bg-fg last:rounded-b-default first:rounded-t-default text-text cursor-pointer"
                  onClick={() => handleSelect(lang)}
                >
                  {lang}
                </li>
              ))}
          </ul>

          <input type="hidden" name={id} value={selected} />
        </div>
      </div>
    </div>
  );
};
