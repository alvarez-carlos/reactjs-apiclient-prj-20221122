import { useState, useEffect, useContext } from "react";

import ChargeImportContext from "../store/ChargeImportContext";

import { Link } from "react-router-dom";
import _ from "lodash";
import Moment from "moment";

import "./ChargeImportPage.css";

const ChargeImportPage = () => {
  const ciCtx = useContext(ChargeImportContext);

  const url = "http://localhost:5000/chargeimport/";

  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState();

  const [paginatedData, setPaginatedData] = useState();

  const [currentPage, setCurrentPage] = useState(1);

  const [search, setSearch] = useState("");

  const fetchData = async () => {
    const res = await fetch(url);
    const dataJSON = await res.json();
    ciCtx.setClaims(dataJSON);
    setData(dataJSON);
    setIsLoading(false);
    console.log(data);
    setPaginatedData(_(dataJSON).slice(0).take(pageSize).value());
  };

  const pagination = (page) => {
    setCurrentPage(page);
    const startIndex = (page - 1) * pageSize;
    const paginatedData = _(data).slice(startIndex).take(pageSize).value();
    setPaginatedData(paginatedData);
  };

  const handleSearch = () => {
    console.log(search);
    // console.log(data.find((claim) => claim.ChgImportID == search));
    fetch(`http://localhost:5000/chargeimport/${search}`)
      .then((resClaim) => resClaim.json())
      .then((resJsonClaim) => {
        // console.log('Res Claim: ', resJsonClaim)
        setPaginatedData([resJsonClaim]);
      });
    // setPaginatedData([data.find((claim) => claim.ChgImportID == search)]);
  };

  const handleEmptySearch = () => {
    // console.log(ciCtx.claims)
    // setData({ ...ciCtx.claims });
    setPaginatedData(ciCtx.claims);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const pageSize = 30;
  const pageCount = data ? Math.ceil(data.length / pageSize) : 0;

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
        <>
          <div className="table-responsive vh-100 ">
            <div className="table  citable-container vh-100 ">
              <div className="table table-striped">
                <table className=" citable table">
                  {/* <table className="table"> */}
                  <thead className="mythead">
                    <tr className="mytheadtr">
                      <th scope="col">ChargeImportID</th>
                      <th scope="col">ProcessStage</th>
                      <th scope="col">PatFirstName</th>
                      <th scope="col">PatLastName</th>
                      <th scope="col">AccessionNo</th>
                      <th scope="col">PatientDOB</th>
                      <th scope="col">PrimaryInsurance</th>
                      <th scope="col">PrimaryInsPolicyNo</th>
                      <th scope="col">FacilityName</th>
                      <th scope="col">DateOfService</th>
                      <th scope="col">DateOfResults</th>
                      <th scope="col">CPTCode1</th>
                      <th scope="col">ICD10Code1</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedData.map((claim) => {
                      return (
                        <tr
                          key={claim.ChgImportID}
                          // onClick={() => {
                          //   setItemClickedId(claim.ChgImportID);
                          //   myCancelHandler(true);
                          // }}
                          className="citablerow"
                        >
                          <td>
                            <Link
                              to={{
                                pathname: `/chargeimport/${claim.ChgImportID}`,
                              }}
                              className="txtnodeco"
                            >
                              {claim.ChgImportID}
                            </Link>
                          </td>
                          <td>
                            <Link
                              to={{
                                pathname: `/chargeimport/${claim.ChgImportID}`,
                              }}
                              className={`txtnodeco`}
                            >
                              {claim.ProcessStage}
                            </Link>
                          </td>
                          <td>
                            <Link
                              to={{
                                pathname: `/chargeimport/${claim.ChgImportID}`,
                              }}
                              className="txtnodeco"
                            >
                              {claim.PatientFirstName}
                            </Link>
                          </td>
                          <td>
                            <Link
                              to={{
                                pathname: `/chargeimport/${claim.ChgImportID}`,
                              }}
                              className="txtnodeco"
                            >
                              {claim.PatientLastName}
                            </Link>
                          </td>
                          <td>
                            <Link
                              to={{
                                pathname: `/chargeimport/${claim.ChgImportID}`,
                              }}
                              className="txtnodeco"
                            >
                              {claim.AccessionNo}
                            </Link>
                          </td>
                          <td>
                            <Link
                              to={{
                                pathname: `/chargeimport/${claim.ChgImportID}`,
                              }}
                              className="txtnodeco"
                            >
                              {/* {Moment(claim.PatientDOB).format("YYYY-MM-DD")} */}
                              {Moment.utc(new Date(claim.PatientDOB)).format(
                                "YYYY-MM-DD"
                              )}
                            </Link>
                          </td>
                          <td>
                            <Link
                              to={{
                                pathname: `/chargeimport/${claim.ChgImportID}`,
                              }}
                              className="txtnodeco"
                            >
                              {claim.PrimaryInsName}
                            </Link>
                          </td>
                          <td>
                            <Link
                              to={{
                                pathname: `/chargeimport/${claim.ChgImportID}`,
                              }}
                              className="txtnodeco"
                            >
                              {claim.PrimaryInsPolicyNo}
                            </Link>
                          </td>
                          <td>
                            <Link
                              to={{
                                pathname: `/chargeimport/${claim.ChgImportID}`,
                              }}
                              className="txtnodeco"
                            >
                              {claim.FacilityName}
                            </Link>
                          </td>
                          <td>
                            <Link
                              to={{
                                pathname: `/chargeimport/${claim.ChgImportID}`,
                              }}
                              className="txtnodeco"
                            >
                              {/* {Moment(claim.DateOfService).format("YYYY-MM-DD")} */}
                              {Moment.utc(new Date(claim.DateOfService)).format(
                                "YYYY-MM-DD"
                              )}
                            </Link>
                          </td>
                          <td>
                            <Link
                              to={{
                                pathname: `/chargeimport/${claim.ChgImportID}`,
                              }}
                              className="txtnodeco"
                            >
                              {/* {Moment(claim.DateOfResults).format("YYYY-MM-DD")} */}
                              {Moment.utc(new Date(claim.DateOfResults)).format(
                                "YYYY-MM-DD"
                              )}
                            </Link>
                          </td>
                          <td>
                            <Link
                              to={{
                                pathname: `/chargeimport/${claim.ChgImportID}`,
                              }}
                              className="txtnodeco"
                            >
                              {claim.CPTCode1}
                            </Link>
                          </td>
                          <td>
                            <Link
                              to={{
                                pathname: `/chargeimport/${claim.ChgImportID}`,
                              }}
                              className="txtnodeco"
                            >
                              {claim.ICD10Code1}
                            </Link>
                          </td>
                         
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

                <nav className="d-flex justify-content-center">
                  <ul className="pagination">
                    {pages.map((page, index) => (
                      <li
                        className={
                          page === currentPage
                            ? "page-item active"
                            : "page-item"
                        }
                        key={index}
                      >
                        <p
                          className="page-link"
                          onClick={() => pagination(page)}
                        >
                          {page}
                        </p>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default ChargeImportPage;
