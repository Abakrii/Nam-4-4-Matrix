import { fieldsInputTypes } from "./types";

const FieldsInputs = ({ onChange, label, name, value }: fieldsInputTypes) => {
  return (
    <form>
      <div>
        <label>
          {label}
          <input name={name} type="text" value={value} onChange={onChange} />
        </label>
      </div>
      <br />
    </form>
  );
};

export default FieldsInputs;
