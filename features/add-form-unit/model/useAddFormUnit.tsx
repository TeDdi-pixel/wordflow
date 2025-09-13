import { showError } from "@/shared/lib/toasts";
import { MAX_ITEMS_LENGTH } from "@/shared/model/constants/units";
import { useTempStore } from "@/shared/store/useTempStore";

const useAddFormUnit = (unitId: string) => {
  const addUnit = useTempStore((state) => state.addUnit);
  const setCurrentUnitId = useTempStore((state) => state.setCurrentUnitId);
  const getUnits = useTempStore((state) => state.getUnits);

  const handleClick = () => {
    if (getUnits().length >= MAX_ITEMS_LENGTH) {
      showError(
        "Ви досягли максимальної кількості карток",
        crypto.randomUUID()
      );
    }
    setCurrentUnitId(unitId);
    addUnit();
  };
  return handleClick;
};

export default useAddFormUnit;
