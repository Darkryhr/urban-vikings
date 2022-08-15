import React from 'react';

const Table = ({ data, columns }) => {
  const rows = [...new Array(data.length)].map((item, index) => {
    return columns.map(({ columnId }) => data[index][columnId]);
  });

  return (
    <table>
      <thead>
        <tr>
          {columns.map(({ columnId, Header }) => {
            return <td key={columnId}>{Header}</td>;
          })}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => {
          return (
            <tr key={index}>
              {row.map((cell, index) => {
                return (
                  <td key={index}>
                    {index === 3 || index === 2 ? '$' : ''}
                    {cell}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
