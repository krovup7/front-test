import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AllItems } from "../component/AllItems/AllItems";
import { useDispatch } from "react-redux";
import { deleteItem, sortItems } from "../redux/actions/ItemsAction";

export const AllItemsContainer = (props) => {
  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(props.match.params.page || 1);
  const [itemsPerPage] = useState(2);
  let items = useSelector((state) => state.items.items);
  const dispatch = useDispatch();
  useEffect(() => {
    setFilteredItems(
      items.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, items]);
  const sortProduct = (event) => {
    dispatch(sortItems(event));
  };
  const deleteProduct = (id) => {
    dispatch(deleteItem(id));
  };
  // Get current posts
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    props.history.push(`/Items/${pageNumber}`);
  };
  const routeChange = () => {
    let path = "/AddItem";
    props.history.push(path);
  };
  return (
    <div>
      <AllItems
        currentItems={currentItems}
        setSearch={setSearch}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={Math.ceil(items.length / itemsPerPage)}
        paginate={paginate}
        deleteProduct={deleteProduct}
        sortItems={sortProduct}
        routeChange={routeChange}
      />
    </div>
  );
};
