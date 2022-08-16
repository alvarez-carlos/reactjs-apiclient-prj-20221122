import { createContext, useState } from "react";

// initial context value
const ChargeImportContext = createContext({
  claims: [],
  totalClaims: 0,
  setClaims: (claimsList) => {},
  updateClaim: (newClaim) => {},
});

export const ChargeImportContextProvider = ({ children }) => {  

  const [chargeImportClaims, setChargeImportClaims] = useState([]);
  
  const currentContext = {
    claims: chargeImportClaims,
    totalClaims: chargeImportClaims.length,
    setClaims: (claimsList) => setClaimsHandler(claimsList),
    updateClaim: (newClaim) => updateClaimHandler(newClaim),
  };

  const setClaimsHandler = (claimsList) => { 
    // console.log(claimsList)   
    setChargeImportClaims(claimsList);
  };

  const updateClaimHandler = (newClaim) => {
    setChargeImportClaims((prevChargeImportClaims) => {
      return prevChargeImportClaims.concat(newClaim);
    });
  };
  
  // we return the constant's Provider. This provider needs to wrap around all the components that are interestind on interacting with the that context or need to consume data from that conext. Normally we wrap the <App /> in the index.js file so that all the components have access to the context.
  return (
    <ChargeImportContext.Provider value={currentContext}>
      {children}
    </ChargeImportContext.Provider>
  );
};

export default ChargeImportContext;
