import React, { useContext } from 'react';
import Context from '../../context/Context';

const Table = () => {
  const { data } = useContext(Context);

  if (!data.length) return <p>Loading...</p>;

  const tableColumns = Object.keys(data[0]).filter((key) => key !== 'residents');

  return (
    <table>
      <thead>
        <tr>
          {tableColumns.map((column) => <th key={ column }>{ column }</th>)}
        </tr>
      </thead>
      <tbody>
        {
          data
            .map((planet) => (
              <tr key={ planet.name }>
                {
                  tableColumns.map((column) => (
                    <td key={ planet[column] }>
                      { planet[column] }
                    </td>
                  ))
                }
              </tr>
            ))
        }
      </tbody>
    </table>
  );
};

export default Table;
