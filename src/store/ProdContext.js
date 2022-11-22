import { createContext, useState } from "react";

// initial context value
const ProdContext = createContext({
  claims: [],
  totalClaims: 0,
  setClaims: (claimsList) => {},
  updateClaim: (newClaim) => {},
});

export const ProdContextProvider = ({ children }) => {  

  const [prodClaims, setProdClaims] = useState([]);
  
  const currentContext = {
    claims: prodClaims,
    totalClaims: prodClaims.length,
    setClaims: (claimsList) => setClaimsHandler(claimsList),
    updateClaim: (newClaim) => updateClaimHandler(newClaim),
  };

  const setClaimsHandler = (claimsList) => { 
    // console.log(claimsList)   
    setProdClaims(claimsList);
  };

  const updateClaimHandler = (newClaim) => {
    setProdClaims((prevProdClaims) => {
      return prevProdClaims.concat(newClaim);
    });
  };
  
  // we return the constant's Provider. This provider needs to wrap around all the components that are interestind on interacting with the that context or need to consume data from that conext. Normally we wrap the <App /> in the index.js file so that all the components have access to the context.
  return (
    <ProdContext.Provider value={currentContext}>
      {children}
    </ProdContext.Provider>
  );
};

export default ProdContext;
