import { useTempStore } from "../store";

const AddUnitButton = () => {
  const addUnit = useTempStore((state) => state.addUnit);

  return <button onClick={addUnit}>Add card</button>;
};

export default AddUnitButton;
