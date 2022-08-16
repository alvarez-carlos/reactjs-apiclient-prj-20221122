import React, { useState } from "react";
import "./ChargeImportModal.css";
import Moment from "moment";

const ChargeImportModal = (props) => {
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

  // modifiedData.push(prevState => {
  //   return (
  //     modifiedClaimProps
  //   )
  // })
  // console.log(modifiedData)

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

    // <div class="modal" tabindex="-1" role="dialog">
    //   <div class="modal-dialog" role="document">
    //     <div class="modal-content">
    //       <div class="modal-header">
    //         <h5 class="modal-title">Are you sure?</h5>
    //         <p>The following filds will be update!</p>
    //         <button
    //           type="button"
    //           class="close"
    //           data-dismiss="modal"
    //           aria-label="Close"
    //         >
    //           <span aria-hidden="true">&times;</span>
    //         </button>
    //       </div>
    //       <div class="modal-body">
    //         <div className="table-responsive">
    //           <div class="table table-striped">
    //             <table className="table">
    //               <thead>
    //                 <tr>
    //                   <th scope="col">Field Description</th>
    //                   <th scope="col">Previous Value</th>
    //                   <th scope="col">New Value</th>
    //                 </tr>
    //               </thead>
    //               <tbody>
    //                 {modifiedData.map((property, index) => {
    //                   return (
    //                     <tr key={index} className="">
    //                       <td>{property.propName}</td>
    //                       <td>{property.prevValue}</td>
    //                       <td>{property.newValue}</td>
    //                     </tr>
    //                   );
    //                 })}
    //               </tbody>
    //             </table>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="modal-footer">
    //         {/* <button type="button" class="btn btn-primary">
    //             Save changes
    //           </button>
    //           <button
    //             type="button"
    //             class="btn btn-secondary"
    //             data-dismiss="modal"
    //           >
    //             Close
    //           </button> */}

    //         <button className="btn btn--alt" onClick={props.cancelHandler}>
    //           Cancel
    //         </button>
    //         <button className="btn" onClick={props.confirmHandler}>
    //           Confirm
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ChargeImportModal;

// <div className="table-responsive">
// <div class="table table-striped">
//   <table className={`${classes.citable} table`}>
//     <thead>
//       <tr>
//         <th scope="col">Field Description</th>
//         <th scope="col">Previous Value</th>
//         <th scope="col">New Value</th>
//       </tr>
//     </thead>
//     <tbody>
//       {modifiedData.map((property, index) => {
//         return (
//           <tr
//             key={item.ChgImportID}
//             className={classes.citablerow}
//           >
//             <td></td>
//             <td></td>
//             <td></td>
//           </tr>
//         );
//       })}
//     </tbody>
//   </table>
// </div>
// </div>
