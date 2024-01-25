import "./Table.css";

function Table({ tableData }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="tablehead">Id</th>
          <th className="tablehead">Name</th>
          <th className="tablehead">Phone</th>
          <th className="tablehead">Email</th>
          <th className="tablehead">Age</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, index) => {
          return (
            <tr key={index} className="border-2">
              <td className="tableData">{index + 1}</td>
              <td className="tableData">{data.name}</td>
              <td className="tableData">{data.phone}</td>
              <td className="tableData">{data.email}</td>
              <td className="tableData">{data.age}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default Table;
