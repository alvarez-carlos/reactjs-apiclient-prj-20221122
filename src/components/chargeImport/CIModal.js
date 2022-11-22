import React, { useState } from "react";
import "./CIModal.css";
import Moment from "moment";

const CIModal = (props) => {
  // const [modifiedData, setModifiedData] = useState([]);
  let modifiedData = [];

  console.log("Entered Data", props.enteredData);

  for (const [key, value] of Object.entries(props.enteredData)) {
    // console.log(claim[id])

    if (
      key === "PatientDOB" ||
      key === "SubscriberDOB" ||
      key === "DateOfService" ||
      key === "DateOfResults"
    ) {
      // console.log(
      //   Moment(props.claim[key]).format("YYYY-MM-DD"),
      //   Moment(props.enteredData[key]).format("YYYY-MM-DD")
      // );
      if (
        Moment.utc(new Date(props.claim[key])).format("YYYY-MM-DD") !==
        Moment.utc(new Date(props.enteredData[key])).format("YYYY-MM-DD")
      ) {
        console.log(
          "This prop has changed: ",
          props.claim[key],
          props.enteredData[key]
        );
        modifiedData.push({
          propName: key,
          prevValue: Moment.utc(new Date(props.claim[key])).format(
            "YYYY-MM-DD"
          ),
          newValue: Moment.utc(new Date(props.enteredData[key])).format(
            "YYYY-MM-DD"
          ),
        });
      }
      // else {
      //   console.log("the same");
      // }
    } else {
      if (props.claim[key]) {
        if (props.enteredData[key]) {
          if (props.enteredData[key] !== props.claim[key]) {
            console.log(
              "This prop has changed: ",
              props.claim[key],
              props.enteredData[key]
            );
            modifiedData.push({
              propName: key,
              prevValue: props.claim[key],
              newValue: props.enteredData[key],
            });
          }
        } else {
          console.log(
            "This prop has changed: ",
            props.claim[key],
            props.enteredData[key]
          );
          modifiedData.push({
            propName: key,
            prevValue: props.claim[key],
            newValue: props.enteredData[key],
          });
        }
      } else if (props.enteredData[key]) {
        console.log(
          "This prop has changed: ",
          props.claim[key],
          props.enteredData[key]
        );
        modifiedData.push({
          propName: key,
          prevValue: props.claim[key],
          newValue: props.enteredData[key],
        });
      }
      // else {
      //   console.log("Ambas son Nada: ", props.claim[key], props.enteredData[key]);
      // }
    }
  }



  if (modifiedData.length === 0) {
    return (
      <div className="cimodalwodata">
        <div className="pt-4 txtwarning">You have not made any change yet.</div>
        <button className="mybtn" onClick={props.cancelHandler}>
          Continue Editing?
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="cimodal">
        <div className="pt-2 pb-4 txtwarning">
          The following fields will be udpated.
        </div>
        <div className="table-responsive">
          <div className="table citable-container">
            <div className="table table-striped">
              <table className="citable table">
                <thead className="mythead">
                  <tr className="mytheadtr">
                    <th scope="col">Field Description</th>
                    <th scope="col">Previous Value</th>
                    <th scope="col">New Value</th>
                  </tr>
                </thead>
                <tbody>
                  {modifiedData.map((property, index) => {
                    if (property.propName === "NeedsReview" || property.propName === 'NGO_IsBalance') {
                      return (
                        <tr key={index} className="">
                          <td>{property.propName}</td>
                          <td>{property.prevValue === true ? "Yes" : "No"}</td>
                          <td>{property.newValue === true ? "Yes" : "No"}</td>
                        </tr>
                      );
                    }
                    if (property.propName === "InNGO") {
                      return (
                        <tr key={index} className="">
                          <td>{property.propName}</td>
                          <td>{property.prevValue === 1 ? "Yes" : "No"}</td>
                          <td>{property.newValue === 1 ? "Yes" : "No"}</td>
                        </tr>
                      );
                    }
                    return (
                      <tr key={index} className="">
                        <td>{property.propName}</td>
                        <td>{property.prevValue}</td>
                        <td>{property.newValue}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="">
          <button className="mybtn mr-4" onClick={props.cancelHandler}>
            Cancel
          </button>
          <button className="mybtn ml-4" onClick={props.confirmHandler}>
            Confirm
          </button>
        </div>
      </div>
    </>
  );
};

export default CIModal;
