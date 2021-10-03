import React, { useEffect, useState } from "react";
import { Row, Col, Spinner, Dropdown } from "react-bootstrap";
import useStyles from "./styles";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import PaginationComponent from "../Pagination/PaginationComponent";
import TransactionTable from "../TransactionTable/TransactionTable";

const Transactions: React.FC = () => {
  const { fetchAllTransactions, fetchPaginatedTransactions } = useActions();
  const [status, setStatus] = useState<string[]>([]);
  const classes = useStyles();
  const { data, error, loading } = useTypedSelector(
    (state) => state.transactionsReducer
  );

  const { paginatedData } = useTypedSelector(
    (state) => state.paginationReducer
  );

  useEffect(() => {
    fetchAllTransactions();
  }, []);

  useEffect(() => {
    if (!data?.items || !data.items.length) return;
    fetchPaginatedTransactions(data);
    const allStatus = [...data.items.map((i: any) => i.status)];
    const uniqueStatus = [...Array.from(new Set(allStatus))];
    uniqueStatus.unshift("ALL");
    setStatus([...uniqueStatus]);
  }, [data]);

  return (
    <div>
      <Row>
        <Col>
          <h1>All Transactions ...</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Dropdown>
            <Dropdown.Toggle variant='primary' id='dropdown-basic'>
              Filter Based on Status
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {status.map((s, id) => (
                <Dropdown.Item key={id} onClick={() => fetchAllTransactions(s)}>
                  {s}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row></Row>
      {error && <h3>{error}</h3>}
      {loading && (
        <Spinner
          className={classes.spinner}
          animation='border'
          variant='primary'
        />
      )}
      {!error && !loading && data && (
        <>
          <TransactionTable data={paginatedData} />
          <PaginationComponent />
        </>
      )}
    </div>
  );
};

export default Transactions;
