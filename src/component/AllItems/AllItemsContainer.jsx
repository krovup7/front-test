import React, {useEffect, useState} from "react";
import { useSelector} from "react-redux";
import AllItems from "./AllItems";
import {Redirect} from "react-router-dom";

export default () => {
    const [search, setSearch] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    let items = useSelector(state => state.items.items)
    let auth = useSelector(state => state.items.auth)
    useEffect(() => {
        setFilteredItems(items.filter(item => {
            return item.name.toLowerCase().includes(search.toLowerCase())
        }))
    }, [search, items]);
    // Get current posts
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
if(!auth){
    return <Redirect to = {'Login'}/>
}
    return (<div>
            <AllItems currentItems={currentItems} setSearch={setSearch} currentPage={currentPage}
                      itemsPerPage={itemsPerPage}
                      totalItems={items.length}
                      paginate={paginate}/>
        </div>
    )
}
