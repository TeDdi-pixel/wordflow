import { TypeSavedUnit } from "@/shared/model/types/saved-unit";
import { SavedWordCard } from "./SavedWordCard";

export const MobileCards = ({
  docs,
  onDelete,
}: {
  docs: TypeSavedUnit[];
  onDelete: (unitId: string) => void;
}) => {
  return (
    <>
      {docs.map((doc, index) => (
        <SavedWordCard
          key={doc._id}
          doc={doc}
          index={index}
          onDelete={onDelete}
        />
      ))}
    </>
  );
};
