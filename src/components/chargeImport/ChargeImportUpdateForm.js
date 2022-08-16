import "./ChargeImportUpdateForm.css";
// useRef Hook
import { useRef, useState, useContext } from "react";

import { useNavigate } from "react-router-dom";



import Moment from "moment";

import DatePicker from "react-datepicker";

import ChargeImportContext from "../../store/ChargeImportContext";

import ChargeImportModal from "../../components/chargeImport/ChargeImportModal";

import Backdrop from "../../components/chargeImport/ChargeImportBackdrop";

const ChargeImportUpdateForm = (props) => {
  const ciCtx = useContext(ChargeImportContext);
  const { claims } = ciCtx;
  const { id } = props;

  const navigate = useNavigate();

  const [showOverlay, setShowOverlay] = useState(false);
  const [enteredData, setEnteredData] = useState({});

  const claim = claims.find((claim) => claim.ChgImportID == id);
  // console.log(claim.PatientDOB)
  console.log(
    "MomentDate",
    Moment.utc(new Date(claim.PatientDOB)).format("MM-DD-YYYY")
  );

  // Form
  const [ChgImportID, setChgImportID] = useState(claim.ChgImportID || "");
  const [BillCoID, setBillCoID] = useState(claim.BillCoID || "");
  const [ClientID, setClientID] = useState(claim.ClientID || "");
  const [SrcFileImportDate, setSrcFileImportDate] = useState(
    claim.SrcFileImportDate || ""
  );
  const [SrcItemImportDateWTime, setSrcItemImportDateWTime] = useState(
    claim.SrcItemImportDateWTime || ""
  );
  const [SourceName, setSourceName] = useState(claim.SourceName || "");
  const [SourceImportID, setSourceImportID] = useState(
    claim.SourceImportID || ""
  );
  const [ChargeImportDate, setChargeImportDate] = useState(
    claim.ChargeImportDate || ""
  );
  const [ChargeImportUserID, setChargeImportUserID] = useState(
    claim.ChargeImportUserID || ""
  );
  const [LastUserID, setLastUserID] = useState(claim.LastUserID || "");
  const [LastUserUpdate, setLastUserUpdate] = useState(
    claim.LastUserUpdate || ""
  );
  const [PatientFirstName, setPatientFirstName] = useState(
    claim.PatientFirstName || ""
  );
  const [PatientMiddleName, setPatientMiddleName] = useState(
    claim.PatientMiddleName || ""
  );
  const [PatientLastName, setPatientLastName] = useState(
    claim.PatientLastName || ""
  );
  const [PatientStreet, setPatientStreet] = useState(claim.PatientStreet || "");
  const [PatientStreet2, setPatientStreet2] = useState(
    claim.PatientStreet2 || ""
  );
  const [PatientCity, setPatientCity] = useState(claim.PatientCity || "");
  const [PatientState, setPatientState] = useState(claim.PatientState || "");
  const [PatientZip, setPatientZip] = useState(claim.PatientZip || "");
  const [PatientDOB, setPatientDOB] = useState(
    Moment.utc(new Date(claim.PatientDOB)).format("YYYY-MM-DD") || ""
  );
  const [PatientSex, setPatientSex] = useState(claim.PatientSex || "");
  const [PatientPhoneNumber, setPatientPhoneNumber] = useState(
    claim.PatientPhoneNumber || ""
  );
  const [PatientSSN, setPatientSSN] = useState(claim.PatientSSN || "");
  const [PatientIDType, setPatientIDType] = useState(claim.PatientIDType || "");
  const [PatientDriversLicense, setPatientDriversLicense] = useState(
    claim.PatientDriversLicense || ""
  );
  const [PatientConsent, setPatientConsent] = useState(
    claim.PatientConsent || ""
  );
  const [PatientTRF_Form, setPatientTRF_Form] = useState(
    claim.PatientTRF_Form || ""
  );
  const [SubscriberFirstName, setSubscriberFirstName] = useState(
    claim.SubscriberFirstName || ""
  );
  const [SubscriberLastName, setSubscriberLastName] = useState(
    claim.SubscriberLastName || ""
  );
  const [SubscriberDOB, setSubscriberDOB] = useState(
    Moment.utc(new Date(claim.SubscriberDOB)).format("YYYY-MM-DD") || ""
  );
  const [PrimaryInsName, setPrimaryInsName] = useState(
    claim.PrimaryInsName || ""
  );
  const [PrimaryInsPolicyNo, setPrimaryInsPolicyNo] = useState(
    claim.PrimaryInsPolicyNo || ""
  );
  const [PrimaryInsGroupNo, setPrimaryInsGroupNo] = useState(
    claim.PrimaryInsGroupNo || ""
  );
  const [PrimaryInsRelation, setPrimaryInsRelation] = useState(
    claim.PrimaryInsRelation || ""
  );
  const [InsCardFront, setInsCardFront] = useState(claim.InsCardFront || "");
  const [InsCardBack, setInsCardBack] = useState(claim.InsCardBack || "");
  const [SecondaryInsName, setSecondaryInsName] = useState(
    claim.SecondaryInsName || ""
  );
  const [SecondaryInsPolicyNo, setSecondaryInsPolicyNo] = useState(
    claim.SecondaryInsPolicyNo || ""
  );
  const [SecondaryInsGroupNo, setSecondaryInsGroupNo] = useState(
    claim.SecondaryInsGroupNo || ""
  );
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
  const [FacilityID, setFacilityID] = useState(claim.FacilityID || "");
  const [FacilityName, setFacilityName] = useState(claim.FacilityName || "");
  const [FacilityStreet, setFacilityStreet] = useState(
    claim.FacilityStreet || ""
  );
  const [FacilityCity, setFacilityCity] = useState(claim.FacilityCity || "");
  const [FacilityState, setFacilityState] = useState(claim.FacilityState || "");
  const [FacilityZip, setFacilityZip] = useState(claim.FacilityZip || "");
  const [FacilityCLIA, setFacilityCLIA] = useState(claim.FacilityCLIA || "");
  const [AccessionNo, setAccessionNo] = useState(claim.AccessionNo || "");
  const [DateOfService, setDateOfService] = useState(
    Moment.utc(new Date(claim.DateOfService)).format("YYYY-MM-DD") || ""
  );
  const [DateOfResults, setDateOfResults] = useState(
    Moment.utc(new Date(claim.DateOfResults)).format("YYYY-MM-DD") || ""
  );
  const [CPTCode1, setCPTCode1] = useState(claim.CPTCode1 || "");
  const [CPTCode2, setCPTCode2] = useState(claim.CPTCode2 || "");
  const [CPTCode3, setCPTCode3] = useState(claim.CPTCode3 || "");
  const [CPTCode4, setCPTCode4] = useState(claim.CPTCode4 || "");
  const [CPTCode5, setCPTCode5] = useState(claim.CPTCode5 || "");
  const [CPTCode6, setCPTCode6] = useState(claim.CPTCode6 || "");
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
  const [ServiceType, setServiceType] = useState(claim.ServiceType || "");
  const [ClientNotes, setClientNotes] = useState(claim.ClientNotes || "");
  const [SubClientName, setSubClientName] = useState(claim.SubClientName || "");
  const [PartnerGroupName, setPartnerGroupName] = useState(
    claim.PartnerGroupName || ""
  );
  const [Barcode, setBarcode] = useState(claim.Barcode || "");
  const [WSLOrderID, setWSLOrderID] = useState(claim.WSLOrderID || "");
  const [InsMissing, setInsMissing] = useState(claim.InsMissing || "");
  const [DateToProduction, setDateToProduction] = useState(
    claim.DateToProduction || ""
  );
  const [ProcessStage, setProcessStage] = useState(claim.ProcessStage || "");
  const [NeedsReview, setNeedsReview] = useState(claim.NeedsReview || "");
  const [IssueID, setIssueID] = useState(claim.IssueID || "");
  const [InNGO, setInNGO] = useState(claim.InNGO || "");
  const [NGO_IsBalance, setNGO_IsBalance] = useState(claim.NGO_IsBalance || "");

  const myConfirmHandler = () => {
    console.log("Data Entered", enteredData);
    fetch(`http://localhost:5000/chargeimport/${enteredData.ChgImportID}`, {
      method: "PUT",
      body: JSON.stringify(enteredData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res);
      setShowOverlay(false);
      navigate("/chargeimport"); //navigate us away w/o allowing us to navigate back to the prev
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
      ChgImportID: ChgImportID || "",
      BillCoID: BillCoID || "",
      ClientID: ClientID || "",
      SrcFileImportDate: SrcFileImportDate || "",
      SrcItemImportDateWTime: SrcItemImportDateWTime || "",
      SourceName: SourceName || "",
      SourceImportID: SourceImportID || "",
      ChargeImportDate: ChargeImportDate || "",
      ChargeImportUserID: ChargeImportUserID || "",
      LastUserID: LastUserID || "",
      LastUserUpdate: LastUserUpdate || "",
      PatientFirstName: PatientFirstName || "",
      PatientMiddleName: PatientMiddleName || "",
      PatientLastName: PatientLastName || "",
      PatientStreet: PatientStreet || "",
      PatientStreet2: PatientStreet2 || "",
      PatientCity: PatientCity || "",
      PatientState: PatientState || "",
      PatientZip: PatientZip || "",
      PatientDOB: PatientDOB || "",
      PatientSex: PatientSex || "",
      PatientPhoneNumber: PatientPhoneNumber || "",
      PatientSSN: PatientSSN || "",
      PatientIDType: PatientIDType || "",
      PatientDriversLicense: PatientDriversLicense || "",
      PatientConsent: PatientConsent || "",
      PatientTRF_Form: PatientTRF_Form || "",
      SubscriberFirstName: SubscriberFirstName || "",
      SubscriberLastName: SubscriberLastName || "",
      SubscriberDOB: SubscriberDOB || "",
      PrimaryInsName: PrimaryInsName || "",
      PrimaryInsPolicyNo: PrimaryInsPolicyNo || "",
      PrimaryInsGroupNo: PrimaryInsGroupNo || "",
      PrimaryInsRelation: PrimaryInsRelation || "",
      InsCardFront: InsCardFront || "",
      InsCardBack: InsCardBack || "",
      SecondaryInsName: SecondaryInsName || "",
      SecondaryInsPolicyNo: SecondaryInsPolicyNo || "",
      SecondaryInsGroupNo: SecondaryInsGroupNo || "",
      OrderingProviderNPI: OrderingProviderNPI || "",
      OrderingProviderName: OrderingProviderName || "",
      OrderingProviderStreet: OrderingProviderStreet || "",
      OrderingProviderStreet2: OrderingProviderStreet2 || "",
      OrderingProviderCity: OrderingProviderCity || "",
      OrderingProviderState: OrderingProviderState || "",
      OrderingProviderZip: OrderingProviderZip || "",
      OrderingProviderPhone: OrderingProviderPhone || "",
      OrderingProviderEmail: OrderingProviderEmail || "",
      FacilityID: FacilityID || "",
      FacilityName: FacilityName || "",
      FacilityStreet: FacilityStreet || "",
      FacilityCity: FacilityCity || "",
      FacilityState: FacilityState || "",
      FacilityZip: FacilityZip || "",
      FacilityCLIA: FacilityCLIA || "",
      AccessionNo: AccessionNo || "",
      DateOfService: DateOfService || "",
      DateOfResults: DateOfResults || "",
      CPTCode1: CPTCode1 || "",
      CPTCode2: CPTCode2 || "",
      CPTCode3: CPTCode3 || "",
      CPTCode4: CPTCode4 || "",
      CPTCode5: CPTCode5 || "",
      CPTCode6: CPTCode6 || "",
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
      ServiceType: ServiceType || "",
      ClientNotes: ClientNotes || "",
      SubClientName: SubClientName || "",
      PartnerGroupName: PartnerGroupName || "",
      Barcode: Barcode || "",
      WSLOrderID: WSLOrderID || "",
      InsMissing: InsMissing || "",
      DateToProduction: DateToProduction || "",
      ProcessStage: ProcessStage || "",
      NeedsReview: NeedsReview || "",
      IssueID: IssueID || "",
      InNGO: InNGO || "",
      NGO_IsBalance: NGO_IsBalance || "",
    });
    setShowOverlay(true);
  };

  return (
    <div>
      <form
        className="growth  needs-validation text-left"
        onSubmit={submitHandler}
      >
        {/* SourceImportID
        ChgImportID
        ClientID
        PatientFirstName
        PatientMiddleName
        PatientLastName */}
        <div className="row mt-4">
          {/*Source Import ID */}
          <div className="col-md-2 ">
            <label for="sourceimportid">Source Import ID</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="sourceimportid"
              placeholder={SourceImportID}
              value={SourceImportID}
              readOnly
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* Charge Import ID*/}
          <div className="col-md-2 ">
            <label for="chargeimportid" className="labelfont">
              Charge Import ID
            </label>
            <input
              type="text"
              className={"form-control labelfont"}
              id="chargeimportid"
              placeholder={ChgImportID}
              value={ChgImportID}
              readOnly
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* Client ID */}
          <div className="col-md-2 ">
            <label for="clientid">Client ID</label>
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

          {/* Patient Middle Name */}
          <div className="col-md-2 ">
            <label for="patientmiddlename">Patient MiddleName</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="patientmiddlename"
              placeholder={PatientMiddleName}
              value={PatientMiddleName}
              onChange={(e) => setPatientMiddleName(e.target.value)}
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
        </div>

        {/* PatientDOB
        PatientSex
        PatientStreet
        PatientStreet2
        PatientCity
        PatientState */}
        <div className="row mt-4">
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

          {/* Patient Street */}
          <div className="col-md-2 ">
            <label for="patientstreet">Patient Street</label>
            <input
              type="text"
              className={"form-control"}
              id="patientstreet"
              placeholder={PatientStreet}
              value={PatientStreet}
              onChange={(e) => setPatientStreet(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* Patient Street 2 */}
          <div className="col-md-2 ">
            <label for="patientstreettwo">Patient Street 2</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="patientstreettwo"
              placeholder={PatientStreet2}
              value={PatientStreet2}
              onChange={(e) => setPatientStreet2(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* Patient City*/}
          <div className="col-md-2 ">
            <label for="patientcity">Patient City</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="patientcity"
              placeholder={PatientCity}
              value={PatientCity}
              onChange={(e) => setPatientCity(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* Patient State */}
          <div className="col-md-2 ">
            <label for="patientstate">Patient State</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="patientstate"
              placeholder={PatientState}
              value={PatientState}
              onChange={(e) => setPatientState(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>

        {/* PatientZip
        SubscriberFirstName
        SubscriberLastName
        SubscriberDOB
        PrimaryInsName
        PrimaryInsPolicyNo */}
        <div className="row mt-4">
          {/*Patient Zip */}
          <div className="col-md-2 ">
            <label for="patientzip">Patient Zip</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="patientzip"
              placeholder={PatientZip}
              value={PatientZip}
              onChange={(e) => setPatientZip(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/*Subscriber Firsst Name*/}
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

          {/* Subscriber DOB*/}
          <div className="col-md-2 ">
            <label for="subscriberdob">Subscriber DOB</label>
            <input
              type="date"
              className={"form-control inputfont"}
              id="subscriberdob"
              placeholder={SubscriberDOB}
              value={SubscriberDOB}
              onChange={(e) => setSubscriberDOB(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* Primary Insurance Name*/}
          <div className="col-md-2 ">
            <label for="primaryinsname">PrimaryIns Name</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="primaryinsname"
              placeholder={PrimaryInsName}
              value={PrimaryInsName}
              onChange={(e) => setPrimaryInsName(e.target.value)}
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
        </div>

        {/* PrimaryInsGroupNo
        PrimaryInsRelation
        SecondaryInsName
        SecondaryInsPolicyNo
        SecondaryInsGroupNo
        OrderingProviderNPI  */}
        <div className="row mt-4">
          {/* Primary Ins Group Number */}
          <div className="col-md-2 ">
            <label for="pimaryinsgroupno">PrimaryIns GroupNo</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="pimaryinsgroupno"
              placeholder={PrimaryInsGroupNo}
              value={PrimaryInsGroupNo}
              onChange={(e) => setPrimaryInsGroupNo(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

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

          {/*SecondaryInsName*/}
          <div className="col-md-2 ">
            <label for="secondaryinsname">SecondaryIns Name</label>
            <input
              type="text"
              className={"form-control"}
              id="secondaryinsname"
              placeholder={SecondaryInsName}
              value={SecondaryInsName}
              onChange={(e) => setSecondaryInsName(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* Secondary Insurance PolicyNo */}
          <div className="col-md-2 ">
            <label for="secondaryinspolicyno">SecondaryIns PolicyNo</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="secondaryinspolicyno"
              placeholder={SecondaryInsPolicyNo}
              value={SecondaryInsPolicyNo}
              onChange={(e) => setSecondaryInsPolicyNo(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* Secondary Ins Group Number*/}
          <div className="col-md-2 ">
            <label for="secondaryinsgroupno">SecondaryIns GroupNo</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="secondaryinsgroupno"
              placeholder={SecondaryInsGroupNo}
              value={SecondaryInsGroupNo}
              onChange={(e) => setSecondaryInsGroupNo(e.target.value)}
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
        </div>

        {/* 
        OrderingProviderName
        OrderingProviderStreet
        OrderingProviderStreet2
        OrderingProviderCity
        OrderingProviderState
        OrderingProviderZip */}
        <div className="row mt-4">
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
        </div>

        {/* OrderingProviderPhone
          OrderingProviderEmail
          FacilityID
          FacilityName
          FacilityStreet
          FacilityCity */}
        <div className="row mt-4">
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

          {/*FacilityStreet*/}
          <div className="col-md-2 ">
            <label for="facilitystreet">Facility Street</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="facilitystreet"
              placeholder={FacilityStreet}
              value={FacilityStreet}
              onChange={(e) => setFacilityStreet(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* FacilityCity*/}
          <div className="col-md-2 ">
            <label for="facilitycity">Facility City</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="facilitycity"
              placeholder={FacilityCity}
              value={FacilityCity}
              onChange={(e) => setFacilityCity(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>

        {/* FacilityState
        FacilityZip
        FacilityCLIA
        AccessionNo
        DateOfService
        DateOfResults */}
        <div className="row mt-4">
          {/* Facility State */}
          <div className="col-md-2 ">
            <label for="facilitystate">Facility State</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="facilitystate"
              placeholder={FacilityState}
              value={FacilityState}
              onChange={(e) => setFacilityState(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/*FacilityZip*/}
          <div className="col-md-2 ">
            <label for="facilityzip" className="labelfont">
              Facility Zip
            </label>
            <input
              type="text"
              className={"form-control labelfont"}
              id="facilityzip"
              placeholder={FacilityZip}
              value={FacilityZip}
              onChange={(e) => setFacilityZip(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/*FacilityCLIA*/}
          <div className="col-md-2 ">
            <label for="facilityclia" className="labelfont">
              Facility CLIA
            </label>
            <input
              type="text"
              className={"form-control labelfont"}
              id="facilityclia"
              placeholder={FacilityCLIA}
              value={FacilityCLIA}
              onChange={(e) => setFacilityCLIA(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

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

        {/* CPTCode1
        CPTCode2
        CPTCode3
        CPTCode4
        CPTCode5
        CPTCode6 */}
        <div className="row mt-4">
          {/* CPTCode1 */}
          <div className="col-md-2 ">
            <label for="cpt1">CPTCode1</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="cpt1"
              placeholder={CPTCode1}
              value={CPTCode1}
              onChange={(e) => setCPTCode1(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* CPTCode2 */}
          <div className="col-md-2 ">
            <label for="cpt2">CPTCode2</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="cpt2"
              placeholder={CPTCode2}
              value={CPTCode2}
              onChange={(e) => setCPTCode2(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* CPTCode3 */}
          <div className="col-md-2 ">
            <label for="cpt3">CPTCode3</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="cpt3"
              placeholder={CPTCode3}
              value={CPTCode3}
              onChange={(e) => setCPTCode3(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* CPTCode4 */}
          <div className="col-md-2 ">
            <label for="cpt4">CPTCode4</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="cpt4"
              placeholder={CPTCode4}
              value={CPTCode4}
              onChange={(e) => setCPTCode4(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* CPTCode5 */}
          <div className="col-md-2 ">
            <label for="cpt5">CPTCode5</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="cpt5"
              placeholder={CPTCode5}
              value={CPTCode5}
              onChange={(e) => setCPTCode5(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* CPTCode6 */}
          <div className="col-md-2 ">
            <label for="cpt6">CPTCode6</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="cpt6"
              placeholder={CPTCode6}
              value={CPTCode6}
              onChange={(e) => setCPTCode6(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>

        {/* ICD10Code1
        ICD10Code2
        ICD10Code3
        ICD10Code4
        ICD10Code5
        ICD10Code6 */}
        <div className="row mt-4">
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
        </div>

        {/* ICD10Code7
        ICD10Code8
        ICD10Code9
        ICD10Code10
        ICD10Code11
        ICD10Code12 */}
        <div className="row mt-4">
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
        </div>

        {/* ServiceType
        PartnerGroupName
        WSLOrderID
        InsMissing
        DateToProduction
        NeedsReview */}
        <div className="row mt-4">
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

          {/* PartnerGroupName */}
          <div className="col-md-2 ">
            <label for="partnergroupname">Partner GroupName</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="partnergroupname"
              placeholder={PartnerGroupName}
              value={PartnerGroupName}
              onChange={(e) => setPartnerGroupName(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* WSLOrderID */}
          <div className="col-md-2 ">
            <label for="wslorderid">WSLOrderID</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="wslorderid"
              placeholder={WSLOrderID}
              value={WSLOrderID}
              onChange={(e) => setWSLOrderID(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* InsMissing */}
          <div className="col-md-2 ">
            <label for="insmissing">Insurance Missing</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="insmissing"
              placeholder={InsMissing}
              value={InsMissing}
              onChange={(e) => setInsMissing(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* DateToProduction */}
          <div className="col-md-2 ">
            <label for="datetoproduction">DateToProduction</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="datetoproduction"
              // placeholder={DateToProduction}
              value={Moment.utc(new Date(claim.DateToProduction)).format(
                "YYYY-MM-DD"
              )}
              // onChange={(e) => setDateToProduction(e.target.value)}
              readOnly
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* NeedsReview */}
          <div className="col-md-2 ">
            <label for="needsreview">Needs Review</label>
            <select
              id='needsreview'
              className="custom-select"
              value={NeedsReview === true ? '1' : '0'}
              onChange={(e) =>
                e.target.value === "1"
                  ? setNeedsReview(true)
                  : setNeedsReview(false)
              }
            >
              <option value='1'>Yes</option>
              <option value='0'>No</option>
            </select>
           
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>

        {/* IssueID
        InNGO
        NGO_IsBalance
        ProcessStage */}

        <div className="row mt-4">
          {/* IssueID */}
          <div className="col-md-2 ">
            <label for="issueid">IssueID</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="issueid"
              placeholder={IssueID}
              value={IssueID}
              onChange={(e) => setIssueID(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* InNGO */}       
          <div className="col-md-2 ">
            <label for="inngo">In NGO</label>
            <select
              id='inngo'
              className="custom-select"
              value={InNGO === 1 ? '1' : '0'}
              onChange={(e) =>
                e.target.value === '1'
                  ? setInNGO(1)
                  : setInNGO(0)
              }
            >
              <option value='1'>Yes</option>
              <option value='0'>No</option>
            </select>
           
            <div className="valid-feedback">Looks good!</div>
          </div>



          {/* NGO_IsBalance */}          
          <div className="col-md-2 ">
            <label for="ngoisbalance">NGO IsBalance</label>
            <select
              id='ngoisbalance'
              className="custom-select"
              value={NGO_IsBalance === true ? '1' : '0'}
              onChange={(e) =>
                e.target.value === "1"
                  ? setNGO_IsBalance(true)
                  : setNGO_IsBalance(false)
              }
            >
              <option value='1'>Yes</option>
              <option value='0'>No</option>
            </select>
           
            <div className="valid-feedback">Looks good!</div>
          </div>



          {/* ProcessStage */}
          {/* <div className="col-md-2 ">
            <label for="currentprocessstage">Current ProcessStage</label>
            <input
              type="text"
              className={"form-control inputfont"}
              id="currentprocessstage"
              placeholder={ProcessStage}
              value={ProcessStage}
              onChange={(e) => setProcessStage(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div> */}

          <div className="col-md-2">
            <label for="processstage">Process Stage</label>
            <select
              className="custom-select"
              value={ProcessStage}
              onChange={(e) => setProcessStage(e.target.value)}
            >
              <option value=""></option>
              <option value="Employee-NotInProduction">
                Employee-NotInProduction
              </option>
              <option value="Imported-Duplicate">Imported-Duplicate</option>
              <option value="Imported-issue identified">
                Imported-issue identified
              </option>
              <option value="Imported-not in Production">
                Imported-not in Production
              </option>
              <option value="InProduction">InProduction</option>
            </select>
            {/* <input
              type="text"
              className={"form-control inputfont"}
              id="processstage"
              placeholder={ProcessStage}
              value={ProcessStage}
              onChange={(e) => setProcessStage(e.target.value)}
            /> */}
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
        <ChargeImportModal
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

export default ChargeImportUpdateForm;
