import React from 'react'
import { Link } from "react-router-dom";
import Moment from "moment";


const ProdTable = ({ paginatedData, pages, currentPage, pagination }) => {
  return (
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
                          key={claim.TransID}
                          // onClick={() => {
                          //   setItemClickedId(claim.TransID);
                          //   myCancelHandler(true);
                          // }}
                          className="citablerow"
                        >
                          <td>
                            <Link
                              to={{
                                pathname: `/production/${claim.TransID}`,
                              }}
                              className="txtnodeco"
                            >
                              {claim.TransID}
                            </Link>
                          </td>
                          <td>
                            <Link
                              to={{
                                pathname: `/production/${claim.TransID}`,
                              }}
                              className={`txtnodeco`}
                            >
                              {claim.ProcessStage}
                            </Link>
                          </td>
                          <td>
                            <Link
                              to={{
                                pathname: `/production/${claim.TransID}`,
                              }}
                              className="txtnodeco"
                            >
                              {claim.PatientFirstName}
                            </Link>
                          </td>
                          <td>
                            <Link
                              to={{
                                pathname: `/production/${claim.TransID}`,
                              }}
                              className="txtnodeco"
                            >
                              {claim.PatientLastName}
                            </Link>
                          </td>
                          <td>
                            <Link
                              to={{
                                pathname: `/production/${claim.TransID}`,
                              }}
                              className="txtnodeco"
                            >
                              {claim.AccessionNo}
                            </Link>
                          </td>
                          <td>
                            <Link
                              to={{
                                pathname: `/production/${claim.TransID}`,
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
                                pathname: `/production/${claim.TransID}`,
                              }}
                              className="txtnodeco"
                            >
                              {claim.PrimaryInsName}
                            </Link>
                          </td>
                          <td>
                            <Link
                              to={{
                                pathname: `/production/${claim.TransID}`,
                              }}
                              className="txtnodeco"
                            >
                              {claim.PrimaryInsPolicyNo}
                            </Link>
                          </td>
                          <td>
                            <Link
                              to={{
                                pathname: `/production/${claim.TransID}`,
                              }}
                              className="txtnodeco"
                            >
                              {claim.FacilityName}
                            </Link>
                          </td>
                          <td>
                            <Link
                              to={{
                                pathname: `/production/${claim.TransID}`,
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
                                pathname: `/production/${claim.TransID}`,
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
                                pathname: `/production/${claim.TransID}`,
                              }}
                              className="txtnodeco"
                            >
                              {claim.CPTCode1}
                            </Link>
                          </td>
                          <td>
                            <Link
                              to={{
                                pathname: `/production/${claim.TransID}`,
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
  )
}

export default ProdTable
