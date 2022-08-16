import "./ProductionUpdateForm.css";
// useRef Hook
import { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";

import Moment from "moment";

import ProductionContext from "../../store/ProductionContext";

import ProductionModal from "../../components/production/ProductionModal";

import Backdrop from "../../components/production/ProductionBackdrop";

const ProductionUpdateForm = (props) => {
  const pCtx = useContext(ProductionContext);

  // console.log(pCtx)

  const { claims } = pCtx;
  console.log(claims);

  const { id } = props;

  const navigate = useNavigate();

  const [showOverlay, setShowOverlay] = useState(false);
  const [enteredData, setEnteredData] = useState({});

  const claim = claims.find((claim) => claim.TransID == id);

  // return(
  //   'Hello from form'
  // )

  const [TransID, setTransID] = useState(claim.TransID || ""); //new
  const [BillCoID, setBillCoID] = useState(claim.BillCoID || "");
  const [ClientID, setClientID] = useState(claim.ClientID || "");
  const [ChgImportID, setChgImportID] = useState(claim.ChgImportID || "");
  const [TransPostDate, setTransPostDate] = useState(claim.TransPostDate || ""); //new
  const [PatID, setPatID] = useState(claim.PatID || ""); //new
  const [PatientSS, setPatientSS] = useState(claim.PatientSS || ""); //new => replace the field PatientSSN

  const [PatientFirstName, setPatientFirstName] = useState(
    claim.PatientFirstName || ""
  );
  const [PatientLastName, setPatientLastName] = useState(
    claim.PatientLastName || ""
  );

  const [PatientDOB, setPatientDOB] = useState(
    Moment.utc(new Date(claim.PatientDOB)).format("YYYY-MM-DD") || ""
  );
  const [PatientSex, setPatientSex] = useState(claim.PatientSex || "");

  const [SubscriberFirstName, setSubscriberFirstName] = useState(
    claim.SubscriberFirstName || ""
  );
  const [SubscriberLastName, setSubscriberLastName] = useState(
    claim.SubscriberLastName || ""
  );

  const [PrimaryInsCoID, setPrimaryInsCoID] = useState(
    claim.PrimaryInsCoID || ""
  ); //new

  const [PrimaryInsNameFrSource, setPrimaryInsNameFrSource] = useState(
    claim.PrimaryInsNameFrSource || ""
  ); // PrimaryInsNameFrSource => replace the PrimaryInsName Field

  const [PrimaryInsCoName, setPrimaryInsCoName] = useState(
    claim.PrimaryInsCoName || ""
  ); //new

  const [PrimaryInsPlanName, setPrimaryInsPlanName] = useState(
    claim.PrimaryInsPlanName || ""
  ); //new

  const [PrimaryInsPolicyNo, setPrimaryInsPolicyNo] = useState(
    claim.PrimaryInsPolicyNo || ""
  );

  const [PrimaryInsGroupNo, setPrimaryInsGroupNo] = useState(
    claim.PrimaryInsGroupNo || ""
  );

  const [PrimaryInsRelation, setPrimaryInsRelation] = useState(
    claim.PrimaryInsRelation || ""
  );

  const [IsHRSA, setIsHRSA] = useState(claim.IsHRSA || ""); //new
  const [InsuranceScope, setInsuranceScope] = useState(
    claim.InsuranceScope || ""
  ); //new

  const [OrderingProviderNPI, setOrderingProviderNPI] = useState(
    claim.OrderingProviderNPI || ""
  );
  const [OrderingProviderName, setOrderingProviderName] = useState(
    claim.OrderingProviderName || ""
  );
  const [OrderingProviderStreet, setOrderingProviderStreet] = useState(
    claim.OrderingProviderStreet || ""
  );
  const [OrderingProviderStreet2, setOrderingProviderStreet2] = useState(
    claim.OrderingProviderStreet2 || ""
  );
  const [OrderingProviderCity, setOrderingProviderCity] = useState(
    claim.OrderingProviderCity || ""
  );
  const [OrderingProviderState, setOrderingProviderState] = useState(
    claim.OrderingProviderState || ""
  );
  const [OrderingProviderZip, setOrderingProviderZip] = useState(
    claim.OrderingProviderZip || ""
  );
  const [OrderingProviderPhone, setOrderingProviderPhone] = useState(
    claim.OrderingProviderPhone || ""
  );
  const [OrderingProviderEmail, setOrderingProviderEmail] = useState(
    claim.OrderingProviderEmail || ""
  );

  const [PatientIDType, setPatientIDType] = useState(claim.PatientIDType || "");

  const [ServiceType, setServiceType] = useState(claim.ServiceType || "");

  const [FacilityID, setFacilityID] = useState(claim.FacilityID || "");
  const [FacilityName, setFacilityName] = useState(claim.FacilityName || "");

  const [DateOfService, setDateOfService] = useState(
    Moment.utc(new Date(claim.DateOfService)).format("YYYY-MM-DD") || ""
  );
  const [DateOfResults, setDateOfResults] = useState(
    Moment.utc(new Date(claim.DateOfResults)).format("YYYY-MM-DD") || ""
  );

  const [AccessionNo, setAccessionNo] = useState(claim.AccessionNo || "");
  const [ProcessStage, setProcessStage] = useState(claim.ProcessStage || "");
  const [CPTCode, setCPTCode] = useState(claim.CPTCode || ""); // replace the field CPTCode1 and delete the rest of cptcode

  const [ICD10Code1, setICD10Code1] = useState(claim.ICD10Code1 || "");
  const [ICD10Code2, setICD10Code2] = useState(claim.ICD10Code2 || "");
  const [ICD10Code3, setICD10Code3] = useState(claim.ICD10Code3 || "");
  const [ICD10Code4, setICD10Code4] = useState(claim.ICD10Code4 || "");
  const [ICD10Code5, setICD10Code5] = useState(claim.ICD10Code5 || "");
  const [ICD10Code6, setICD10Code6] = useState(claim.ICD10Code6 || "");
  const [ICD10Code7, setICD10Code7] = useState(claim.ICD10Code7 || "");
  const [ICD10Code8, setICD10Code8] = useState(claim.ICD10Code8 || "");
  const [ICD10Code9, setICD10Code9] = useState(claim.ICD10Code9 || "");
  const [ICD10Code10, setICD10Code10] = useState(claim.ICD10Code10 || "");
  const [ICD10Code11, setICD10Code11] = useState(claim.ICD10Code11 || "");
  const [ICD10Code12, setICD10Code12] = useState(claim.ICD10Code12 || "");

  const [Prof_Fee, setProf_Fee] = useState(claim.Prof_Fee || ""); //new
  const [Tech_Fee, setTech_Fee] = useState(claim.Tech_Fee || ""); //new
  const [Glob_Fee, setGlob_Fee] = useState(claim.Glob_Fee || ""); //new
  const [MCR_Prof_Fee, setMCR_Prof_Fee] = useState(claim.MCR_Prof_Fee || ""); //new
  const [MCR_Tech_Fee, setMCR_Tech_Fee] = useState(claim.MCR_Tech_Fee || ""); //new
  const [MCR_Glob_Fee, setMCR_Glob_Fee] = useState(claim.MCR_Glob_Fee || ""); //new

  const [LastBotMachineName, setLastBotMachineName] = useState(
    claim.LastBotMachineName || ""
  ); //new
  const [LastBotResult, setLastBotResult] = useState(claim.LastBotResult || ""); //new

  const [Voided, setVoided] = useState(claim.Voided || ""); //new
  const [VoidedDate, setVoidedDate] = useState(claim.VoidedDate || ""); //new
  const [LastUserID, setLastUserID] = useState(claim.LastUserID || "");
  const [LastUserUpdate, setLastUserUpdate] = useState(
    claim.LastUserUpdate || ""
  );
  const [HRSAID, setHRSAID] = useState(claim.HRSAID || ""); //new
  const [NGO_ChargeItemID, setNGO_ChargeItemID] = useState(
    claim.NGO_ChargeItemID || ""
  ); //new
  const [NGO_ChargeAmount, setNGO_ChargeAmount] = useState(
    claim.NGO_ChargeAmount || ""
  ); //new
  const [NGO_Pat_Resp, setNGO_Pat_Resp] = useState(claim.NGO_Pat_Resp || ""); //new
  const [NGO_Pat_Pmt, setNGO_Pat_Pmt] = useState(claim.NGO_Pat_Pmt || ""); //new
  const [NGO_Ins_Pmt, setNGO_Ins_Pmt] = useState(claim.NGO_Ins_Pmt || ""); //new
  const [NGO_Ins_Adj, setNGO_Ins_Adj] = useState(claim.NGO_Ins_Adj || ""); //new
  const [NGO_InsBal, setNGO_InsBal] = useState(claim.NGO_InsBal || ""); //new
  const [NGO_RefreshDate, setNGO_RefreshDate] = useState(
    claim.NGO_RefreshDate || ""
  ); //new

  const myConfirmHandler = () => {
    console.log("Data Entered", enteredData);
    fetch(`http://localhost:5000/Production/${enteredData.ChgImportID}`, {
      method: "PUT",
      body: JSON.stringify(enteredData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res);
      setShowOverlay(false);
      navigate("/Production");
    });
  };

  const myCancelHandler = () => {
    setShowOverlay(false);
  };

  const updateSetsetShowOverlay = () => {
    setShowOverlay(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setEnteredData({
      TransID: TransID || "",
      BillCoID: BillCoID || "",
      ClientID: ClientID || "",
      ChgImportID: ChgImportID || "",
      TransPostDate: TransPostDate || "",
      PatID: PatID || "",
      PatientSS: PatientSS || "",
      PatientFirstName: PatientFirstName || "",
      PatientLastName: PatientLastName || "",
      PatientDOB: PatientDOB || "",
      PatientSex: PatientSex || "",
      SubscriberFirstName: SubscriberFirstName || "",
      SubscriberLastName: SubscriberLastName || "",
      PrimaryInsCoID: PrimaryInsCoID || "",
      PrimaryInsNameFrSource: PrimaryInsNameFrSource || "",
      PrimaryInsCoName: PrimaryInsCoName || "",
      PrimaryInsPlanName: PrimaryInsPlanName || "",
      PrimaryInsPolicyNo: PrimaryInsPolicyNo || "",
      PrimaryInsGroupNo: PrimaryInsGroupNo || "",
      PrimaryInsRelation: PrimaryInsRelation || "",
      IsHRSA: IsHRSA || "",
      InsuranceScope: InsuranceScope || "",
      OrderingProviderNPI: OrderingProviderNPI || "",
      OrderingProviderName: OrderingProviderName || "",
      OrderingProviderStreet: OrderingProviderStreet || "",
      OrderingProviderStreet2: OrderingProviderStreet2 || "",
      OrderingProviderCity: OrderingProviderCity || "",
      OrderingProviderState: OrderingProviderState || "",
      OrderingProviderZip: OrderingProviderZip || "",
      OrderingProviderPhone: OrderingProviderPhone || "",
      OrderingProviderEmail: OrderingProviderEmail || "",
      PatientIDType: PatientIDType || "",
      ServiceType: ServiceType || "",
      FacilityID: FacilityID || "",
      FacilityName: FacilityName || "",
      DateOfService: DateOfService || "",
      DateOfResults: DateOfResults || "",
      AccessionNo: AccessionNo || "",
      ProcessStage: ProcessStage || "",
      CPTCode: CPTCode || "",
      ICD10Code1: ICD10Code1 || "",
      ICD10Code2: ICD10Code2 || "",
      ICD10Code3: ICD10Code3 || "",
      ICD10Code4: ICD10Code4 || "",
      ICD10Code5: ICD10Code5 || "",
      ICD10Code6: ICD10Code6 || "",
      ICD10Code7: ICD10Code7 || "",
      ICD10Code8: ICD10Code8 || "",
      ICD10Code9: ICD10Code9 || "",
      ICD10Code10: ICD10Code10 || "",
      ICD10Code11: ICD10Code11 || "",
      ICD10Code12: ICD10Code12 || "",
      Prof_Fee: Prof_Fee || "",
      Tech_Fee: Tech_Fee || "",
      Glob_Fee: Glob_Fee || "",
      MCR_Prof_Fee: MCR_Prof_Fee || "",
      MCR_Tech_Fee: MCR_Tech_Fee || "",
      MCR_Glob_Fee: MCR_Glob_Fee || "",
      LastBotMachineName: LastBotMachineName || "",
      LastBotResult: LastBotResult || "",
      Voided: Voided || "",
      VoidedDate: VoidedDate || "",
      LastUserID: LastUserID || "",
      LastUserUpdate: LastUserUpdate || "",
      HRSAID: HRSAID || "",
      NGO_ChargeItemID: NGO_ChargeItemID || "",
      NGO_ChargeAmount: NGO_ChargeAmount || "",
      NGO_Pat_Resp: NGO_Pat_Resp || "",
      NGO_Pat_Pmt: NGO_Pat_Pmt || "",
      NGO_Ins_Pmt: NGO_Ins_Pmt || "",
      NGO_Ins_Adj: NGO_Ins_Adj || "",
      NGO_InsBal: NGO_InsBal || "",
      NGO_RefreshDate: NGO_RefreshDate || null,
    });
    setShowOverlay(true);
  };

  return (
    <div>
      <form
        className="growth  needs-validation text-left"
        onSubmit={submitHandler}
      >
        {/* TransID
        ChgImportID
        ClientID
        TransPostDate
        PatID
        PatientSS */}
        <div className="row mt-4">
          {/*Trans ID */}
          <div className="col-md-2 ">
            <label for="transid">Trans ID</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="transid"
              placeholder={TransID}
              value={TransID}
              readOnly
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* Charge Import ID*/}
          <div className="col-md-2 ">
            <label for="Productionid" className="labelfont">
              Charge Import ID
            </label>
            <input
              type="text"
              className={"form-control labelfont"}
              id="Productionid"
              placeholder={ChgImportID}
              value={ChgImportID}
              readOnly
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* Client ID */}
          <div className="col-md-2 ">
            <label for="clientid">ClientID</label>
            <input
              type="text"
              className={"form-control"}
              id="clientid"
              placeholder={ClientID}
              value={ClientID}
              readOnly
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* TransPostDate */}
          <div className="col-md-2 ">
            <label for="transpostdate">TransPostDate</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="transpostdate"
              value={Moment.utc(new Date(claim.TransPostDate)).format(
                "YYYY-MM-DD"
              )}
              readOnly
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/*PatID */}
          <div className="col-md-2 ">
            <label for="patientid">PatID</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="patientid"
              placeholder={PatID}
              value={PatID}
              readOnly
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/*PatientSS */}
          <div className="col-md-2 ">
            <label for="patientss">PatientSS</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="patientss"
              placeholder={PatientSS}
              value={PatientSS}
              readOnly
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>

        {/* PatientFirstName
          PatientLastName
          PatientDOB
          PatientSex
          SubscriberFirstName
          SubscriberLastName */}
        <div className="row mt-4">
          {/* Patient First Name */}
          <div className="col-md-2 ">
            <label for="patientfirstname">Patient FirstName</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="patientfirstname"
              placeholder={PatientFirstName}
              value={PatientFirstName}
              onChange={(e) => setPatientFirstName(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* Patient Last Name */}
          <div className="col-md-2 ">
            <label for="patientlastname">Patient LastName</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="patientlastname"
              placeholder={PatientLastName}
              value={PatientLastName}
              onChange={(e) => setPatientLastName(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/*Patient DOB */}
          <div className="col-md-2 ">
            <label for="patientdob">Patient DOB</label>
            <input
              type="date"
              className={"form-control inputfont"}
              id="patientdob"
              placeholder={PatientDOB}
              value={PatientDOB}
              onChange={(e) => setPatientDOB(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/*Patient Sex*/}

          <div className="col-md-2">
            <label for="patientsex">Patient Sex</label>
            <select
              id="patientsex"
              className="custom-select"
              value={PatientSex}
              onChange={(e) => setPatientSex(e.target.value)}
            >
              <option value=""></option>
              <option value="M">M</option>
              <option value="F">F</option>
            </select>
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/*Subscriber First Name*/}
          <div className="col-md-2 ">
            <label for="subscriberfirstname" className="labelfont">
              Subscriber First Name
            </label>
            <input
              type="text"
              className={"form-control labelfont"}
              id="subscriberfirstname"
              placeholder={SubscriberFirstName}
              value={SubscriberFirstName}
              onChange={(e) => setSubscriberFirstName(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/*Subscriber Last Name*/}
          <div className="col-md-2 ">
            <label for="subscriberlastname">Subscriber Last Name</label>
            <input
              type="text"
              className={"form-control"}
              id="subscriberlastname"
              placeholder={SubscriberLastName}
              value={SubscriberLastName}
              onChange={(e) => setSubscriberLastName(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>

        {/*PrimaryInsCoID
        PrimaryInsNameFrSource
        PrimaryInsCoName
        PrimaryInsPlanName
        PrimaryInsPolicyNo
        PrimaryInsGroupNo */}
        <div className="row mt-4">
          {/*PrimaryInsCoID */}
          <div className="col-md-2 ">
            <label for="primaryinscoid">PrimaryInsCoID</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="primaryinscoid"
              placeholder={PrimaryInsCoID}
              value={PrimaryInsCoID}
              onChange={(e) => setPrimaryInsCoID(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/*PrimaryInsNameFrSource*/}
          <div className="col-md-2 ">
            <label for="primaryinsnamefrsrc">PrimaryInsNameFrSource</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="primaryinsnamefrsrc"
              placeholder={PrimaryInsNameFrSource}
              value={PrimaryInsNameFrSource}
              onChange={(e) => setPrimaryInsNameFrSource(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/*PrimaryInsCoName*/}
          <div className="col-md-2 ">
            <label for="primaryinsconame">PrimaryInsCoName</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="primaryinsconame"
              placeholder={PrimaryInsCoName}
              value={PrimaryInsCoName}
              onChange={(e) => setPrimaryInsCoName(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/*PrimaryInsPlanName*/}
          <div className="col-md-2 ">
            <label for="primaryinsplanname">PrimaryInsPlanName</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="primaryinsplanname"
              placeholder={PrimaryInsPlanName}
              value={PrimaryInsPlanName}
              onChange={(e) => setPrimaryInsPlanName(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* Primary Insurance PolicyNo */}
          <div className="col-md-2 ">
            <label for="primaryinspolicyno">PrimaryIns PolicyNo</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="primaryinspolicyno"
              placeholder={PrimaryInsPolicyNo}
              value={PrimaryInsPolicyNo}
              onChange={(e) => setPrimaryInsPolicyNo(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/*PrimaryInsGroupNo*/}
          <div className="col-md-2 ">
            <label for="primaryinsgroupno">PrimaryInsGroupNo</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="primaryinsgroupno"
              placeholder={PrimaryInsGroupNo}
              value={PrimaryInsGroupNo}
              onChange={(e) => setPrimaryInsGroupNo(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>

        {/* PrimaryInsRelation
            IsHRSA
            InsuranceScope
            OrderingProviderNPI
            OrderingProviderName
            OrderingProviderStreet */}
        <div className="row mt-4">
          {/*Primary Ins Relation*/}
          <div className="col-md-2 ">
            <label for="primaryinsrelation" className="labelfont">
              PrimaryIns Relation
            </label>
            <input
              type="text"
              className={"form-control labelfont"}
              id="primaryinsrelation"
              placeholder={PrimaryInsRelation}
              value={PrimaryInsRelation}
              onChange={(e) => setPrimaryInsRelation(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* IsHRSA */}
          <div className="col-md-2 ">
            <label for="ishrsa">IsHRSA</label>
            <select
              id="ishrsa"
              className="custom-select"
              value={IsHRSA === true ? "1" : "0"}
              onChange={(e) =>
                e.target.value === "1" ? setIsHRSA(true) : setIsHRSA(false)
              }
            >
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>

            <div className="valid-feedback">Looks good!</div>
          </div>

          {/*InsuranceScope*/}
          <div className="col-md-2 ">
            <label for="insscope">Insurance Scope</label>
            <input
              type="text"
              className={"form-control"}
              id="insscope"
              placeholder={InsuranceScope}
              value={InsuranceScope}
              onChange={(e) => setInsuranceScope(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* Ordering Provider NPI*/}
          <div className="col-md-2 ">
            <label for="orderingprovidernpi">OrderingProvider NPI</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="orderingprovidernpi"
              placeholder={OrderingProviderNPI}
              value={OrderingProviderNPI}
              onChange={(e) => setOrderingProviderNPI(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* Ordering Provider Name */}
          <div className="col-md-2 ">
            <label for="orderingprovidername">OrderingProvider Name</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="orderingprovidername"
              placeholder={OrderingProviderName}
              value={OrderingProviderName}
              onChange={(e) => setOrderingProviderName(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/*Ordering Provider Street*/}
          <div className="col-md-2 ">
            <label for="orderingproviderstreet" className="labelfont">
              OrderingProvider Street
            </label>
            <input
              type="text"
              className={"form-control labelfont"}
              id="orderingproviderstreet"
              placeholder={OrderingProviderStreet}
              value={OrderingProviderStreet}
              onChange={(e) => setOrderingProviderStreet(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>

        {/* 
        OrderingProviderStreet2
        OrderingProviderCity
        OrderingProviderState
        OrderingProviderZip
        OrderingProviderPhone
        OrderingProviderEmail */}
        <div className="row mt-4">
          {/*Ordering Provider Street2*/}
          <div className="col-md-2 ">
            <label for="orderingproviderstreet2" className="labelfont">
              OrderingProvider Street2
            </label>
            <input
              type="text"
              className={"form-control labelfont"}
              id="orderingproviderstreet2"
              placeholder={OrderingProviderStreet2}
              value={OrderingProviderStreet2}
              onChange={(e) => setOrderingProviderStreet2(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* Ordering Provider City */}
          <div className="col-md-2 ">
            <label for="orderingprovidercity">orderingProvider City</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="orderingprovidercity"
              placeholder={OrderingProviderCity}
              value={OrderingProviderCity}
              onChange={(e) => setOrderingProviderCity(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/*Ordering Provider State*/}
          <div className="col-md-2 ">
            <label for="orderingproviderstate">OrderingProvider State</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="orderingproviderstate"
              placeholder={OrderingProviderState}
              value={OrderingProviderState}
              onChange={(e) => setOrderingProviderState(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* Ordering Provider ZIP*/}
          <div className="col-md-2 ">
            <label for="orderingproviderzip">Ordering ProviderZIP</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="orderingproviderzip"
              placeholder={OrderingProviderZip}
              value={OrderingProviderZip}
              onChange={(e) => setOrderingProviderZip(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* Ordering Provider Phone */}
          <div className="col-md-2 ">
            <label for="orderingproviderphone">OrderingProvider Phone</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="orderingproviderphone"
              placeholder={OrderingProviderPhone}
              value={OrderingProviderPhone}
              onChange={(e) => setOrderingProviderPhone(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/*Ordering Provider Email*/}
          <div className="col-md-2 ">
            <label for="orderingprovideremail" className="labelfont">
              OrderingProvider Email
            </label>
            <input
              type="text"
              className={"form-control labelfont"}
              id="orderingprovideremail"
              placeholder={OrderingProviderEmail}
              value={OrderingProviderEmail}
              onChange={(e) => setOrderingProviderEmail(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>

        {/* PatientIDType
            ServiceType
            FacilityID
            FacilityName
            DateOfService
            DateOfResults
            */}
        <div className="row mt-4">
          {/*PatientIDType*/}
          <div className="col-md-2 ">
            <label for="patidtype" className="labelfont">
              PatientIDType
            </label>
            <input
              type="text"
              className={"form-control labelfont"}
              id="patidtype"
              placeholder={PatientIDType}
              value={PatientIDType}
              onChange={(e) => setPatientIDType(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* ServiceType */}
          <div className="col-md-2 ">
            <label for="servicetype">Service Type</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="servicetype"
              placeholder={ServiceType}
              value={ServiceType}
              onChange={(e) =>
                e.target.value === "1"
                  ? setServiceType(true)
                  : setServiceType(false)
              }
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/*FacilityID*/}
          <div className="col-md-2 ">
            <label for="facilityid" className="labelfont">
              FacilityID
            </label>
            <input
              type="text"
              className={"form-control labelfont"}
              id="facilityid"
              placeholder={FacilityID}
              value={FacilityID}
              onChange={(e) => setFacilityID(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* FacilityName */}
          <div className="col-md-2 ">
            <label for="facilityname">Facility Name</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="facilityname"
              placeholder={FacilityName}
              value={FacilityName}
              onChange={(e) => setFacilityName(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/*DateOfService*/}
          <div className="col-md-2 ">
            <label for="dos">Service Date</label>
            <input
              type="date"
              className={"form-control inputfont"}
              id="dos"
              placeholder={DateOfService}
              value={DateOfService}
              onChange={(e) => setDateOfService(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* DateOfResults*/}
          <div className="col-md-2 ">
            <label for="resultsdate">Results Date</label>
            <input
              type="date"
              className={"form-control inputfont"}
              id="resultsdate"
              placeholder={DateOfResults}
              value={DateOfResults}
              onChange={(e) => setDateOfResults(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>

        {/*AccessionNo
          ProcessStage
          CPTCode
          ICD10Code1
          ICD10Code2
          ICD10Code3 */}
        <div className="row mt-4">
          {/* AccessionNo */}
          <div className="col-md-2 ">
            <label for="accessionno">AccessionNo</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="accessionno"
              placeholder={AccessionNo}
              value={AccessionNo}
              onChange={(e) => setAccessionNo(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* ProcessStage */}
          <div className="col-md-2">
            <label for="processstage">Process Stage</label>
            <select
              className="custom-select"
              value={ProcessStage}
              onChange={(e) => setProcessStage(e.target.value)}
            >
              <option value=""></option>
              <option value="BotFinished-Success">BotFinished-Success</option>
              <option value="BotIsEating">BotIsEating</option>
              <option value="BotProcessed-NoSuccess">
                BotProcessed-NoSuccess
              </option>
              <option value="Employee-NotInProduction">
                Employee-NotInProduction
              </option>
              <option value="Hold-HFTeamApp_Human">Hold-HFTeamApp_Human</option>
              <option value="Hold-ProdApp_Human">Hold-ProdApp_Human</option>
              <option value="HRSAReady">HRSAReady</option>
              <option value="HRSATempIDTracking">HRSATempIDTracking</option>
              <option value="InProduction">InProduction</option>
              <option value="Ins_SentToBotFood">Ins_SentToBotFood</option>
              <option value="PrevWorked">PrevWorked</option>
              <option value="Voided">Voided</option>
            </select>
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* CPTCode */}
          <div className="col-md-2 ">
            <label for="cpt">CPTCode</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="cpt"
              placeholder={CPTCode}
              value={CPTCode}
              onChange={(e) => setCPTCode(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* ICD10Code1 */}
          <div className="col-md-2 ">
            <label for="icd1">ICD10Code1</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="icd1"
              placeholder={ICD10Code1}
              value={ICD10Code1}
              onChange={(e) => setICD10Code1(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* ICD10Code2 */}
          <div className="col-md-2 ">
            <label for="icd2">ICD10Code2</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="icd2"
              placeholder={ICD10Code2}
              value={ICD10Code2}
              onChange={(e) => setICD10Code2(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* ICD10Code3 */}
          <div className="col-md-2 ">
            <label for="icd3">ICD10Code3</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="icd3"
              placeholder={ICD10Code3}
              value={ICD10Code3}
              onChange={(e) => setICD10Code3(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>

        {/* ICD10Code4
            ICD10Code5
            ICD10Code6
            ICD10Code7
            ICD10Code8
            ICD10Code9 */}
        <div className="row mt-4">
          {/* ICD10Code4 */}
          <div className="col-md-2 ">
            <label for="icd4">ICD10Code4</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="icd4"
              placeholder={ICD10Code4}
              value={ICD10Code4}
              onChange={(e) => setICD10Code4(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* ICD10Code5 */}
          <div className="col-md-2 ">
            <label for="icd5">ICD10Code5</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="icd5"
              placeholder={ICD10Code5}
              value={ICD10Code5}
              onChange={(e) => setICD10Code5(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* ICD10Code6 */}
          <div className="col-md-2 ">
            <label for="icd6">ICD10Code6</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="icd6"
              placeholder={ICD10Code6}
              value={ICD10Code6}
              onChange={(e) => setICD10Code6(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* ICD10Code7 */}
          <div className="col-md-2 ">
            <label for="icd7">ICD10Code7</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="icd7"
              placeholder={ICD10Code7}
              value={ICD10Code7}
              onChange={(e) => setICD10Code7(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* ICD10Code8 */}
          <div className="col-md-2 ">
            <label for="icd8">ICD10Code8</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="icd8"
              placeholder={ICD10Code8}
              value={ICD10Code8}
              onChange={(e) => setICD10Code8(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* ICD10Code9 */}
          <div className="col-md-2 ">
            <label for="icd9">ICD10Code9</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="icd9"
              placeholder={ICD10Code9}
              value={ICD10Code9}
              onChange={(e) => setICD10Code9(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>

        {/* ICD10Code10
            ICD10Code11
            ICD10Code12
            Prof_Fee
            Tech_Fee
            Glob_Fee
            */}
        <div className="row mt-4">
          {/* ICD10Code10 */}
          <div className="col-md-2 ">
            <label for="icd10">ICD10Code10</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="icd10"
              placeholder={ICD10Code10}
              value={ICD10Code10}
              onChange={(e) => setICD10Code10(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* ICD10Code11 */}
          <div className="col-md-2 ">
            <label for="icd11">ICD10Code11</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="icd11"
              placeholder={ICD10Code11}
              value={ICD10Code11}
              onChange={(e) => setICD10Code11(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* ICD10Code12 */}
          <div className="col-md-2 ">
            <label for="icd12">ICD10Code12</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="icd12"
              placeholder={ICD10Code12}
              value={ICD10Code12}
              onChange={(e) => setICD10Code12(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* Prof_Fee */}
          <div className="col-md-2 ">
            <label for="proffee">Prof_Fee</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="proffee"
              placeholder={Prof_Fee}
              value={Prof_Fee}
              onChange={(e) => setProf_Fee(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* Tech_Fee */}
          <div className="col-md-2 ">
            <label for="techfee">Tech_Fee</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="techfee"
              placeholder={Tech_Fee}
              value={Tech_Fee}
              onChange={(e) => setTech_Fee(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* Glob_Fee */}
          <div className="col-md-2 ">
            <label for="globfee">Glob_Fee</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="globfee"
              placeholder={Glob_Fee}
              value={Glob_Fee}
              onChange={(e) => setGlob_Fee(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>

        {/* CR_Prof_Fee
          MCR_Tech_Fee
          MCR_Glob_Fee
          LastBotMachineName
          LastBotResult
          Voided */}
        <div className="row mt-4">
          {/* MCR_Prof_Fee */}
          <div className="col-md-2 ">
            <label for="mcrproffee">MCR_Prof_Fee</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="mcrproffee"
              placeholder={MCR_Prof_Fee}
              value={MCR_Prof_Fee}
              onChange={(e) => setMCR_Prof_Fee(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* MCR_Tech_Fee */}
          <div className="col-md-2 ">
            <label for="mcrtechfee">MCR_Tech_Fee</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="mcrtechfee"
              placeholder={MCR_Tech_Fee}
              value={MCR_Tech_Fee}
              onChange={(e) => setMCR_Tech_Fee(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* MCR_Glob_Fee */}
          <div className="col-md-2 ">
            <label for="mcrglobfee">MCR_Glob_Fee</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="mcrglobfee"
              placeholder={MCR_Glob_Fee}
              value={MCR_Glob_Fee}
              onChange={(e) => setMCR_Glob_Fee(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* LastBotMachineName */}
          <div className="col-md-2 ">
            <label for="lastBbtmachinename">LastBotMachineName</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="lastBbtmachinename"
              placeholder={LastBotMachineName}
              value={LastBotMachineName}
              onChange={(e) => setLastBotMachineName(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* LastBotResult */}
          <div className="col-md-2 ">
            <label for="lastbotresult">LastBotResult</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="lastbotresult"
              placeholder={LastBotResult}
              value={LastBotResult}
              onChange={(e) => setLastBotResult(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* Voided */}
          <div className="col-md-2 ">
            <label for="voided">Voided</label>
            <select
              id="voided"
              className="custom-select"
              value={Voided === true ? "1" : "0"}
              onChange={(e) =>
                e.target.value === "1" ? setVoided(true) : setVoided(false)
              }
            >
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>

            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* NeedsReview */}
          {/* <div className="col-md-2 ">
            <label for="needsreview">Needs Review</label>
            <select
              id="needsreview"
              className="custom-select"
              value={NeedsReview === true ? "1" : "0"}
              onChange={(e) =>
                e.target.value === "1"
                  ? setNeedsReview(true)
                  : setNeedsReview(false)
              }
            >
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>

            <div className="valid-feedback">Looks good!</div>
          </div> */}
        </div>

        {/* VoidedDate
            LastUserID
            LastUserUpdate
            HRSAID
            NGO_ChargeItemID
            NGO_ChargeAmount */}

        <div className="row mt-4">
          {/* VoidedDate */}
          <div className="col-md-2 ">
            <label for="voideddate">VoidedDate</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="voideddate"
              value={Moment.utc(new Date(claim.VoidedDate)).format(
                "YYYY-MM-DD"
              )}
              // onChange={(e) => setVoidedDate(e.target.value)}
              readOnly
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* LastUserID */}
          <div className="col-md-2 ">
            <label for="lastuseriD">LastUserID</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="lastuseriD"
              placeholder={LastUserID}
              value={LastUserID}
              onChange={(e) => setLastUserID(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* LastUserUpdate */}
          <div className="col-md-2 ">
            <label for="lastuserupdate">LastUserUpdate</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="lastuserupdate"
              value={Moment.utc(new Date(claim.LastUserUpdate)).format(
                "YYYY-MM-DD"
              )}
              // onChange={(e) => setLastUserUpdate(e.target.value)}
              readOnly
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* HRSAID */}
          <div className="col-md-2 ">
            <label for="hrsaid">HRSAID</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="hrsaid"
              placeholder={HRSAID}
              value={HRSAID}
              onChange={(e) => setHRSAID(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* NGO_ChargeItemID */}
          <div className="col-md-2 ">
            <label for="nchargeitemid">NGO_ChargeItemID</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="nchargeitemid"
              placeholder={NGO_ChargeItemID}
              value={NGO_ChargeItemID}
              onChange={(e) => setNGO_ChargeItemID(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* NGO_ChargeAmount */}
          <div className="col-md-2 ">
            <label for="nchargeamount">NGO_ChargeAmount</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="nchargeamount"
              placeholder={NGO_ChargeAmount}
              value={NGO_ChargeAmount}
              onChange={(e) => setNGO_ChargeAmount(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>

        <div className="row mt-4">
          {/* NGO_Pat_Resp */}
          <div className="col-md-2 ">
            <label for="npatresp">NGO_Pat_Resp</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="npatresp"
              placeholder={NGO_Pat_Resp}
              value={NGO_Pat_Resp}
              onChange={(e) => setNGO_Pat_Resp(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* NGO_Pat_Pmt */}
          <div className="col-md-2 ">
            <label for="ngopatpmt">NGO_Pat_Pmt</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="ngopatpmt"
              placeholder={NGO_Pat_Pmt}
              value={NGO_Pat_Pmt}
              onChange={(e) => setNGO_Pat_Pmt(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* NGO_Ins_Pmt */}
          <div className="col-md-2 ">
            <label for="ninspmt">NGO_Ins_Pmt</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="ninspmt"
              placeholder={NGO_Ins_Pmt}
              value={NGO_Ins_Pmt}
              onChange={(e) => setNGO_Ins_Pmt(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* NGO_Ins_Adj */}
          <div className="col-md-2 ">
            <label for="ninsadj">NGO_Ins_Adj</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="ninsadj"
              placeholder={NGO_Ins_Adj}
              value={NGO_Ins_Adj}
              onChange={(e) => setNGO_Ins_Adj(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* NGO_InsBal */}
          <div className="col-md-2 ">
            <label for="ngoinsbal">NGO InsBal</label>
            <select
              id="ngoinsbal"
              className="custom-select"
              value={NGO_InsBal === true ? "1" : "0"}
              onChange={(e) =>
                e.target.value === "1"
                  ? setNGO_InsBal(true)
                  : setNGO_InsBal(false)
              }
            >
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>

            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* NGO_RefreshDate */}
          <div className="col-md-2 ">
            <label for="ngorefreshdate">NGO_RefreshDate</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="ngorefreshdate"
              value={ claim.NGO_RefreshDate ? Moment.utc(new Date(claim.NGO_RefreshDate)).format(
                "YYYY-MM-DD") : null }
              // onChange={(e) => setLastUserUpdate(e.target.value)}
              readOnly
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>

        {/* <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck"
              
            />
            <label className="form-check-label" for="invalidCheck">
              Agree to terms and conditions
            </label>
            <div className="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
      </div>*/}
        <button className="mybtn" type="submit">
          Update Claim
        </button>
      </form>

      {showOverlay && (
        <ProductionModal
          enteredData={enteredData}
          claim={claim}
          cancelHandler={myCancelHandler}
          confirmHandler={myConfirmHandler}
        />
      )}

      {showOverlay && <Backdrop clickHandler={myCancelHandler} />}
    </div>
  );
};

export default ProductionUpdateForm;
