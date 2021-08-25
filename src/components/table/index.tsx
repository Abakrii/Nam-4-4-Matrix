import "./styles.css";
import { tableTypes } from "./types";
const Table = ({ tableItems, handleClearTable }: tableTypes) => {
  let isTableItemsHasNoData = tableItems.length === 0;

  const renderTableHeader = () => {
    let baseHeader = ["firstName", "lastName", "title"];
    let header = isTableItemsHasNoData
      ? baseHeader
      : Object.keys(tableItems[0]);

    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };
  const renderTableData = () => {
    return tableItems.map((item: any, index: any) => {
      return (
        <tr key={index}>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.title}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <h1 id="title">the Table</h1>
      <table id="table">
        <tbody>
          {<tr>{renderTableHeader()}</tr>}
          {renderTableData()}
        </tbody>
      </table>
      {!isTableItemsHasNoData && (
        <button
          className="btn btn-primary"
          disabled={isTableItemsHasNoData}
          onClick={handleClearTable}
        >
          Clear the table
        </button>
      )}
    </div>
  );
};

export default Table;
