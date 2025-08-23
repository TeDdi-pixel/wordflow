import { showError } from "@/shared/lib/toasts";
import { UNIT_SET_ERROR_MESSAGES } from "@/shared/model/constants/errors";
import { useTempStore } from "@/shared/store/useTempStore";

const useRemoveFormUnit = (unitId: string) => {
  const removeUnit = useTempStore((state) => state.removeUnit);
  const setCurrentUnitId = useTempStore((state) => state.setCurrentUnitId);
  const getUnits = useTempStore((state) => state.getUnits);

  const handleClick = () => {
    if (getUnits().length <= 1)
      showError(
        UNIT_SET_ERROR_MESSAGES.ERROR_CARD_SET_EMPTY,
        crypto.randomUUID()
      );
    setCurrentUnitId(unitId);
    removeUnit();
  };
  return handleClick;
};

export default useRemoveFormUnit;
