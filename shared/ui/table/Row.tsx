import NotProvidedIcon from "@/shared/icons/unit/NotProvidedIcon";

const Row = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="text-xs sm:text-sm text-muted">{label}</p>
    <p className="text-sm sm:text-[16px] text-accent">
      {value || <NotProvidedIcon />}
    </p>
  </div>
);

export default Row;
