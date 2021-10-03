import React from "react";
import { Table } from "react-bootstrap";

interface item {
  id: string;
  amount: number;
  currency: string;
  description: string;
  status: string;
  createdAt: string;
}

interface TableProps {
  data:
    | {
        items?: Array<item>;
      }
    | undefined;
}

const TransactionTable: React.FC<TableProps> = ({ data }) => {
  return (
    <div>
      <Table striped bordered hover className='my-4' data-testid='table'>
        <thead data-testid='thead'>
          <tr>
            {data?.items &&
              Object.keys(data.items[0]).map((i) => (
                <th key={i}>{i[0].toLocaleUpperCase() + i.slice(1)}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data?.items?.map((i: item) => {
            const { id, amount, currency, description, status, createdAt } = i;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{amount}</td>
                <td>{currency}</td>
                <td>{description}</td>
                <td>{status}</td>
                <td>{createdAt}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TransactionTable;
