import { createContext, useState } from "react";

// initial context value
const CIContext = createContext({
  claims: [],
  totalClaims: 0,
  setClaims: (claimsList) => {},
  updateClaim: (newClaim) => {},
});

export const CIContextProvider = ({ children }) => {  

  const [ciClaims, setCIClaims] = useState([]);
  
  const currentContext = {
    claims: ciClaims,
    totalClaims: ciClaims.length,
    setClaims: (claimsList) => setClaimsHandler(claimsList),
    updateClaim: (newClaim) => updateClaimHandler(newClaim),
  };

  const setClaimsHandler = (claimsList) => { 
    // console.log(claimsList)   
    setCIClaims(claimsList);
  };

  const updateClaimHandler = (newClaim) => {
    setCIClaims((prevCIClaims) => {
      return prevCIClaims.concat(newClaim);
    });
  };
  
  // we return the constant's Provider. This provider needs to wrap around all the components that are interestind on interacting with the that context or need to consume data from that conext. Normally we wrap the <App /> in the index.js file so that all the components have access to the context.
  return (
    <CIContext.Provider value={currentContext}>
      {children}
    </CIContext.Provider>
  );
};

export default CIContext;
