import { useState, useEffect, useContext } from "react";

import _ from "lodash";

import CIContext from "../store/CIContext";
import CITable from "../components/chargeImport/CITable";

import "./CIPage.css";

const url = "http://localhost:5000/chargeimport/";

const CIPage = () => {
  
  const ciCtx = useContext(CIContext);


  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [paginatedData, setPaginatedData] = useState();
  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 30;
  const pageCount = data ? Math.ceil(data.length / pageSize) : 0;


  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const dataJSON = await res.json();
      ciCtx.setClaims(dataJSON);
      setData(dataJSON);
      setIsLoading(false);
      console.log(data);
      setPaginatedData(_(dataJSON).slice(0).take(pageSize).value());
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = () => {
    console.log(search);
    fetch(`http://localhost:5000/chargeimport/${search}`)
      .then((resClaim) => resClaim.json())
      .then((resJsonClaim) => {
        setPaginatedData([resJsonClaim]);
      })
      .catch(error => {
        console.log(error)
      })
  };

  const handleEmptySearch = () => { 
    setPaginatedData(ciCtx.claims);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const pagination = (page) => {
    setCurrentPage(page);
    const startIndex = (page - 1) * pageSize;
    const paginatedData = _(data).slice(startIndex).take(pageSize).value();
    setPaginatedData(paginatedData);
  };

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
        <CITable paginatedData={paginatedData} pagination={pagination} pages={pages} currentPage={currentPage}/>
      )}
    </section>
  );
  
};

export default CIPage;
