import { useState, useEffect, useContext } from "react";

import ProdContext from "../store/ProdContext";

import { Link } from "react-router-dom";
import _ from "lodash";
import Moment from "moment";

import ProdTable from '../components/production/ProdTable'

import "./ProdPage.css";

const ProdPage = () => {
  const pCtx = useContext(ProdContext);

  const url = "http://localhost:5000/production/";

  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState();

  const [paginatedData, setPaginatedData] = useState();

  const [currentPage, setCurrentPage] = useState(1);

  const [search, setSearch] = useState("");

  const pageSize = 30;
  const pageCount = data ? Math.ceil(data.length / pageSize) : 0;

  const fetchData = async () => {
    const res = await fetch(url);
    const dataJSON = await res.json();
    pCtx.setClaims(dataJSON);
    setData(dataJSON);
    setIsLoading(false);
    console.log(dataJSON);
    setPaginatedData(_(dataJSON).slice(0).take(pageSize).value());
  };

  const pagination = (page) => {
    setCurrentPage(page);
    const startIndex = (page - 1) * pageSize;
    const paginatedData = _(data).slice(startIndex).take(pageSize).value();
    setPaginatedData(paginatedData);
  };

  const handleSearch = () => {
    fetch(`http://localhost:5000/production/${search}`)
      .then((resClaim) => resClaim.json())
      .then((resJsonClaim) => {
        setPaginatedData([resJsonClaim]);
      });
  };

  const handleEmptySearch = () => {
    setPaginatedData(pCtx.claims);
  };

  useEffect(() => {
    fetchData();
  }, []);

  
  if (pageCount === 0) return null;
  const pages = _.range(1, pageCount + 1);

  if (isLoading) {
    return (
      <section>
        <h2>Spinner - Loading...</h2>
      </section>
    );
  }

  return (
    <section className="tablesection">
      <div className="">
        <label htmlFor="search" className="txtnodeco searchtxt">
          Search by Charge Import ID:
          <input
            id="search"
            type="text"
            onChange={(e) =>
              e.target.value == ""
                ? handleEmptySearch()
                : setSearch(e.target.value)
            }
            className="pl-2 pt-1 pb-1 ml-1"
          />
          <button className="my_btn m-1" onClick={handleSearch}>
            Search
          </button>
        </label>
      </div>

      {!paginatedData ? (
        "No data found"
      ) : (
        <ProdTable paginatedData={paginatedData} pagination={pagination} pages={pages} currentPage={currentPage}/>
      )}
    </section>
  );
};

export default ProdPage;
