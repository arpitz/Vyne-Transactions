import { useState, useEffect } from "react";
import { Pagination } from "react-bootstrap";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const PAGE_SIZE = 5;

const PaginationComponent: React.FC = () => {
  const { fetchPaginatedTransactions } = useActions();
  const [pages, setPages] = useState(1);
  const initialActiveState = Array(pages).fill(false);
  initialActiveState.unshift(true);
  const [active, setActive] = useState(initialActiveState);

  const { data } = useTypedSelector((state) => state.transactionsReducer);

  useEffect(() => {
    const totalItems = data?.items?.length;
    if (totalItems && totalItems > 5) {
      setPages(totalItems % 5 === 0 ? totalItems / 5 : totalItems % 5);
    } else if (totalItems && totalItems < 5) {
      setPages(1);
    }
  }, [data]);

  const handlePageClick = (currPage: number): void => {
    const newActive = Array(pages).fill(false);
    newActive[currPage - 1] = true;
    setActive(newActive);
    fetchPaginatedTransactions(data, PAGE_SIZE * (currPage - 1));
  };

  const renderItems = () => {
    const items = [];
    for (let i = 1; i <= pages; i++) {
      items.push(
        <Pagination.Item
          key={i}
          active={active[i - 1]}
          onClick={() => handlePageClick(i)}>
          {i}
        </Pagination.Item>
      );
    }
    return items;
  };

  return (
    <Pagination size='lg'>
      <Pagination.First />
      {renderItems()}
      <Pagination.Last />
    </Pagination>
  );
};

export default PaginationComponent;
