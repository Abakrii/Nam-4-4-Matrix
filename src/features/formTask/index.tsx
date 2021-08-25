import { useState, ChangeEvent } from "react";
import { FieldsInputs, Table } from "../../components";
import { InitialFieldsValues, valuesState } from "./types";

const FormTask = () => {
  const { FIRST_NAME, LAST_NAME, TITLE } = InitialFieldsValues;

  const [values, setValues] = useState<valuesState>({
    firstName: FIRST_NAME,
    lastName: LAST_NAME,
    title: TITLE,
  });

  const { firstName, lastName, title } = values;

  const handleChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValues({
      ...values,
      [event.target.name]: value,
    });
  };

  const FIELDS_INPUT = [
    {
      id: 1,
      name: "firstName",
      label: "First Name",
      defaultValue: firstName,
    },
    {
      id: 2,
      name: "lastName",
      label: "Last Name",
      defaultValue: lastName,
    },
    {
      id: 3,
      name: "title",
      label: "Title",
      defaultValue: title,
    },
  ];

  const isSubmitDisabled = !firstName || !lastName || !title;

  const [tableItems, setTableItems]: any = useState([]);

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    let items = [...tableItems];
    if (tableItems.length < 5) {
      items.push({
        firstName,
        lastName,
        title,
      });
      setTableItems(items);
    }

    setValues({
      firstName: "",
      lastName: "",
      title: "",
    });
  };

  const handleClearTable = () => {
    setTableItems([]);
  };

  return (
    <>
      {FIELDS_INPUT.map((item) => {
        const { id, name, defaultValue, label }: any = item;
        return (
          <FieldsInputs
            key={id}
            name={name}
            value={defaultValue}
            label={label}
            onChange={handleChangeInputs}
          />
        );
      })}
      <button
        type="submit"
        className="btn btn-primary"
        disabled={isSubmitDisabled}
        onClick={handleFormSubmit}
      >
        Submit
      </button>
      <Table tableItems={tableItems} handleClearTable={handleClearTable} />
    </>
  );
};

export default FormTask;
