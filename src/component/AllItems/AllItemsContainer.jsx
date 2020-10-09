import React, {useEffect, useState} from "react";
import { useSelector} from "react-redux";
import {AllItems} from "./AllItems";
import {useDispatch} from "react-redux";
import {deleteItem, sortItems} from "../../redux/actions/ItemsAction";

export const AllItemsContainer = () => {
    const [search, setSearch] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    let items = useSelector(state => state.items.items)
    const dispatch = useDispatch();
    useEffect(() => {
        setFilteredItems(items.filter(item => {
            return item.name.toLowerCase().includes(search.toLowerCase())
        }))
    }, [search, items]);
    const sortProduct=(event)=>{
        dispatch(sortItems(event))
    };
    const deleteProduct=(id)=>{
        dispatch(deleteItem(id))
    };
    // Get current posts
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (<div>
            <AllItems currentItems={currentItems} setSearch={setSearch} currentPage={currentPage}
                      itemsPerPage={itemsPerPage}
                      totalItems={items.length}
                      paginate={paginate} deleteProduct={deleteProduct} sortItems={sortProduct}/>
        </div>
    )
}
