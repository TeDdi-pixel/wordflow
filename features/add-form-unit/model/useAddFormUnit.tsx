import { MAX_ITEMS_LENGTH } from "@/shared/model/constants/units";
import { useTempStore } from "@/shared/store/useTempStore";
import toast from "react-hot-toast";

const useAddFormUnit = (unitId: string) => {
  const addUnit = useTempStore((state) => state.addUnit);
  const setCurrentUnitId = useTempStore((state) => state.setCurrentUnitId);
  const getUnits = useTempStore((state) => state.getUnits);

  const handleClick = () => {
    if (getUnits().length >= MAX_ITEMS_LENGTH) {
      toast.error("Ви досягли максимальної кількості карток", {
        position: "top-center",
        id: crypto.randomUUID(),
      });
    }
    setCurrentUnitId(unitId);
    addUnit();
  };
  return handleClick;
};

export default useAddFormUnit;
