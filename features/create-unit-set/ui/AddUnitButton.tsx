import { useTempStore } from "../../../store/useTempStore";

const AddUnitButton = () => {
  const addUnit = useTempStore((state) => state.addUnit);

  return (
    <button type="button" onClick={addUnit}>
      Add card
    </button>
  );
};

export default AddUnitButton;
