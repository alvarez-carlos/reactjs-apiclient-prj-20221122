import "./CIUpdateForm.css";

import { useState, useContext } from "react";

import { useNavigate, useParams } from "react-router-dom";

import Moment from "moment";

import CIContext from "../../store/CIContext";

import CIModal from "./CIModal";

import Backdrop from "../shared/Backdrop";

import InputText from "../shared/form/InputText";
import InputSelect from "../shared/form/InputSelect";
import InputSelectBoolean from "../shared/form/InputSelectBoolean";
import InputSelectInteger from "../shared/form/InputSelectInteger";


const url = "http://localhost:5000/chargeimport/";

const CIUpdateForm = (props) => {
  const { id } = useParams();

  const ciCtx = useContext(CIContext);
  const { claims } = ciCtx;

  const navigate = useNavigate();

  const [showOverlay, setShowOverlay] = useState(false);
  const [enteredData, setEnteredData] = useState({});

  const claim = claims.find((claim) => claim.ChgImportID == id);

  // Form Fields States
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
  const [CIDate, setCIDate] = useState(claim.CIDate || "");
  const [CIUserID, setCIUserID] = useState(claim.CIUserID || "");
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
    fetch(`${url} ${enteredData.ChgImportID}`, {
      method: "PUT",
      body: JSON.stringify(enteredData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res);
      setShowOverlay(false);
      navigate("/chargeimport");
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
      CIDate: CIDate || "",
      CIUserID: CIUserID || "",
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
        <div className="row mt-4">
          <InputText
            type="text"
            id="sourceimportid"
            label="Source Import ID"
            value={SourceImportID}
            setStateFn={() => {}}
            readOnlyProp={true}
          />
          <InputText
            type="text"
            id="ciid"
            label="Charge Import ID"
            value={ChgImportID}
            setStateFn={() => {}}
            readOnlyProp={true}
          />
          <InputText
            type="text"
            id="clientid"
            label="Client ID"
            value={ClientID}
            setStateFn={() => {}}
            readOnlyProp={true}
          />
          <InputText
            type="text"
            id="patientfirstname"
            label="Patient FirstName"
            value={PatientFirstName}
            setStateFn={setPatientFirstName}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="patientmiddlename"
            label="Patient MiddleName"
            value={PatientMiddleName}
            setStateFn={setPatientMiddleName}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="patientlastname"
            label="Patient LastName"
            value={PatientLastName}
            setStateFn={setPatientLastName}
            readOnlyProp={false}
          />
        </div>

        <div className="row mt-4">
          <InputText
            type="date"
            id="patientdob"
            label="Patient DOB"
            value={PatientDOB}
            setStateFn={setPatientDOB}
            readOnlyProp={false}
          />

          <InputSelect
            id="patientsex"
            label="Patient Sex"
            value={PatientSex}
            setStateFn={setPatientSex}
            readOnlyProp={false}
          >
            <option value=""></option>
            <option value="M">M</option>
            <option value="F">F</option>
          </InputSelect>

          <InputText
            type="text"
            id="patientstreet"
            label="Patient Street"
            value={PatientStreet}
            setStateFn={setPatientStreet}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="patientstreettwo"
            label="Patient Street 2"
            value={PatientStreet2}
            setStateFn={setPatientStreet2}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="patientcity"
            label="Patient City"
            value={PatientCity}
            setStateFn={setPatientCity}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="patientstate"
            label="Patient State"
            value={PatientState}
            setStateFn={setPatientState}
            readOnlyProp={false}
          />
        </div>

        <div className="row mt-4">
          <InputText
            type="text"
            id="patientzip"
            label="Patient Zip"
            value={PatientZip}
            setStateFn={setPatientZip}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="subscriberfirstname"
            label="Subscriber First Name"
            value={SubscriberFirstName}
            setStateFn={setSubscriberFirstName}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="subscriberlastname"
            label="Subscriber Last Name"
            value={SubscriberLastName}
            setStateFn={setSubscriberLastName}
            readOnlyProp={false}
          />
          <InputText
            type="date"
            id="subscriberdob"
            label="Subscriber DOB"
            value={SubscriberDOB}
            setStateFn={setSubscriberDOB}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="primaryinsname"
            label="PrimaryIns Name"
            value={PrimaryInsName}
            setStateFn={setPrimaryInsName}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="primaryinspolicyno"
            label="PrimaryIns PolicyNo"
            value={PrimaryInsPolicyNo}
            setStateFn={setPrimaryInsPolicyNo}
            readOnlyProp={false}
          />
        </div>

        <div className="row mt-4">
          <InputText
            type="text"
            id="pimaryinsgroupno"
            label="PrimaryIns GroupNo"
            value={PrimaryInsGroupNo}
            setStateFn={setPrimaryInsGroupNo}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="primaryinsrelation"
            label="PrimaryIns Relation"
            value={PrimaryInsRelation}
            setStateFn={setPrimaryInsRelation}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="secondaryinsname"
            label="SecondaryIns Name"
            value={SecondaryInsName}
            setStateFn={setSecondaryInsName}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="secondaryinspolicyno"
            label="SecondaryIns PolicyNo"
            value={SecondaryInsPolicyNo}
            setStateFn={setSecondaryInsPolicyNo}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="secondaryinsgroupno"
            label="SecondaryIns GroupNo"
            value={SecondaryInsGroupNo}
            setStateFn={setSecondaryInsGroupNo}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="orderingprovidernpi"
            label="OrderingProvider NPI"
            value={OrderingProviderNPI}
            setStateFn={setOrderingProviderNPI}
            readOnlyProp={false}
          />
        </div>

        <div className="row mt-4">
          <InputText
            type="text"
            id="orderingprovidername"
            label="OrderingProvider Name"
            value={OrderingProviderName}
            setStateFn={setOrderingProviderName}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="orderingproviderstreet"
            label="OrderingProvider Street"
            value={OrderingProviderStreet}
            setStateFn={setOrderingProviderStreet}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="orderingproviderstreet2"
            label="OrderingProvider Street2"
            value={OrderingProviderStreet2}
            setStateFn={setOrderingProviderStreet2}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="orderingprovidercity"
            label="OrderingProvider City"
            value={OrderingProviderCity}
            setStateFn={setOrderingProviderCity}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="orderingproviderstate"
            label="OrderingProvider State"
            value={OrderingProviderState}
            setStateFn={setOrderingProviderState}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="orderingproviderzip"
            label="Ordering ProviderZIP"
            value={OrderingProviderZip}
            setStateFn={setOrderingProviderZip}
            readOnlyProp={false}
          />
        </div>

        <div className="row mt-4">
          <InputText
            type="text"
            id="orderingproviderphone"
            label="OrderingProvider Phone"
            value={OrderingProviderPhone}
            setStateFn={setOrderingProviderPhone}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="orderingprovideremail"
            label="OrderingProvider Email"
            value={OrderingProviderEmail}
            setStateFn={setOrderingProviderEmail}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="facilityid"
            label="OrderingProvider Email"
            value={FacilityID}
            setStateFn={setFacilityID}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="facilityname"
            label="Facility Name"
            value={FacilityID}
            setStateFn={setFacilityName}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="facilitystreet"
            label="Facility Street"
            value={FacilityStreet}
            setStateFn={setFacilityStreet}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="facilitycity"
            label="Facility City"
            value={FacilityCity}
            setStateFn={setFacilityCity}
            readOnlyProp={false}
          />
        </div>

        <div className="row mt-4">
          <InputText
            type="text"
            id="facilitystate"
            label="Facility State"
            value={FacilityState}
            setStateFn={setFacilityState}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="facilityzip"
            label="Facility Zip"
            value={FacilityZip}
            setStateFn={setFacilityZip}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="facilityclia"
            label="Facility CLIA"
            value={FacilityCLIA}
            setStateFn={setFacilityCLIA}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="accessionno"
            label="AccessionNo"
            value={AccessionNo}
            setStateFn={setAccessionNo}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="dos"
            label="Service Date"
            value={DateOfService}
            setStateFn={setDateOfService}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="resultsdate"
            label="Results Date"
            value={DateOfResults}
            setStateFn={setDateOfResults}
            readOnlyProp={false}
          />
        </div>

        <div className="row mt-4">
          <InputText
            type="text"
            id="cpt1"
            label="CPTCode1"
            value={CPTCode1}
            setStateFn={setCPTCode1}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="cpt2"
            label="CPTCode2"
            value={CPTCode2}
            setStateFn={setCPTCode2}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="cpt3"
            label="CPTCode3"
            value={CPTCode3}
            setStateFn={setCPTCode3}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="cpt4"
            label="CPTCode4"
            value={CPTCode4}
            setStateFn={setCPTCode4}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="cpt5"
            label="CPTCode5"
            value={CPTCode5}
            setStateFn={setCPTCode5}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="cpt6"
            label="CPTCode6"
            value={CPTCode6}
            setStateFn={setCPTCode6}
            readOnlyProp={false}
          />
        </div>

        <div className="row mt-4">
          <InputText
            type="text"
            id="icd1"
            label="ICD10Code1"
            value={ICD10Code1}
            setStateFn={setICD10Code1}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="icd2"
            label="ICD10Code2"
            value={ICD10Code2}
            setStateFn={setICD10Code2}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="icd3"
            label="ICD10Code3"
            value={ICD10Code3}
            setStateFn={setICD10Code3}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="icd4"
            label="ICD10Code4"
            value={ICD10Code4}
            setStateFn={setICD10Code4}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="icd5"
            label="ICD10Code5"
            value={ICD10Code5}
            setStateFn={setICD10Code5}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="icd6"
            label="ICD10Code6"
            value={ICD10Code6}
            setStateFn={setICD10Code6}
            readOnlyProp={false}
          />
        </div>

        <div className="row mt-4">
          <InputText
            type="text"
            id="icd1"
            label="ICD10Code1"
            value={ICD10Code1}
            setStateFn={setICD10Code1}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="icd2"
            label="ICD10Code2"
            value={ICD10Code2}
            setStateFn={setICD10Code2}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="icd3"
            label="ICD10Code3"
            value={ICD10Code3}
            setStateFn={setICD10Code3}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="icd4"
            label="ICD10Code4"
            value={ICD10Code4}
            setStateFn={setICD10Code4}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="icd5"
            label="ICD10Code5"
            value={ICD10Code5}
            setStateFn={setICD10Code5}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="icd6"
            label="ICD10Code6"
            value={ICD10Code6}
            setStateFn={setICD10Code6}
            readOnlyProp={false}
          />
        </div>

        <div className="row mt-4">
          <InputText
            type="text"
            id="servicetype"
            label="Service Type"
            value={ServiceType}
            setStateFn={(e) =>
              e.target.value === "1"
                ? setServiceType(true)
                : setServiceType(false)
            }
            readOnlyProp={false}
          />

          <InputText
            type="text"
            id="partnergroupname"
            label="Partner GroupName"
            value={PartnerGroupName}
            setStateFn={setPartnerGroupName}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="wslorderid"
            label="WSLOrderID"
            value={WSLOrderID}
            setStateFn={setWSLOrderID}
            readOnlyProp={false}
          />
          <InputText
            type="text"
            id="insmissing"
            label="Insurance Missing"
            value={InsMissing}
            setStateFn={setInsMissing}
            readOnlyProp={false}
          />
          <InputText
            type="date"
            id="datetoproduction"
            label="DateToProduction"
            value={Moment.utc(new Date(claim.DateToProduction)).format(
              "YYYY-MM-DD"
            )}
            setStateFn={() => {}}
            readOnlyProp={true}
          />

          <InputSelectBoolean
            id="needsreview"
            label="Needs Review"
            value={NeedsReview === true ? "1" : "0"}
            setStateFn={setNeedsReview}
            readOnlyProp={false}
          >
            <option value=""></option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </InputSelectBoolean>
        </div>

        <div className="row mt-4">
          <InputText
            type="text"
            id="issueid"
            label="IssueID"
            value={IssueID}
            setStateFn={setIssueID}
            readOnlyProp={false}
          />

          <InputSelectInteger
            id="inngo"
            label="In NGO"
            value={InNGO === 1 ? "1" : "0"}
            setStateFn={setInNGO}
            readOnlyProp={false}
          >
            <option value=""></option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </InputSelectInteger>

          <InputSelectBoolean
            id="ngoisbalance"
            label="NGO IsBalance"
            value={NGO_IsBalance === true ? "1" : "0"}
            setStateFn={setNGO_IsBalance}
            readOnlyProp={false}
          >
            <option value=""></option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </InputSelectBoolean>

          <InputSelect
            id="processstage"
            label="Process Stage"
            value={ProcessStage}
            setStateFn={setProcessStage}
            readOnlyProp={false}
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
          </InputSelect>
        </div>

        <button className="mybtn" type="submit">
          Update Claim
        </button>
      </form>

      {showOverlay && (
        <CIModal
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

export default CIUpdateForm;
