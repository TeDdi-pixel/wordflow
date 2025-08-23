"use client";

import { Language } from "@/shared/model/types/temp-store";
import { useTempStore } from "@/shared/store/useTempStore";

const LanguageSelect = ({
  id,
  label,
}: {
  defaultLanguage: Language;
  id: "termLang" | "definitionLang";
  label: string;
}) => {
  const termLang = useTempStore((state) => state.termLang);
  const definitionLang = useTempStore((state) => state.definitionLang);
  const setTermLang = useTempStore((state) => state.setTermLang);
  const setDefinitionLang = useTempStore((state) => state.setDefinitionLang);

  const selected = id === "termLang" ? termLang : definitionLang;

  const handleSelect = (lang: Language) => {
    if (id === "termLang") {
      if (definitionLang === lang) {
        setDefinitionLang(termLang);
      }
      setTermLang(lang);
    } else {
      if (termLang === lang) {
        setTermLang(definitionLang);
      }
      setDefinitionLang(lang);
    }
  };

  return (
    <div className="w-full mb-[32px]">
      <div className="flex items-center gap-4">
        <label htmlFor={id}>{label}</label>
        <div className="relative max-w-[120px] w-full group select-none">
          <button
            id={id}
            type="button"
            className="border-6 border-bg w-full text-center py-1 px-3 bg-fg rounded-2xl"
          >
            {selected}
          </button>
          <ul className="max-w-[120px] w-full absolute shadow-md z-10 flex flex-col border-6 border-bg rounded-2xl transition-all scale-80 group-hover:scale-100 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
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

export default LanguageSelect;
