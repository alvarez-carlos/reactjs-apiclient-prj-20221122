import { createContext, useState } from "react";

// initial context value
const ProductionContext = createContext({
  claims: [],
  totalClaims: 0,
  setClaims: (claimsList) => {},
  updateClaim: (newClaim) => {},
});

export const ProductionContextProvider = ({ children }) => {  

  const [productionClaims, setProductionClaims] = useState([]);
  
  const currentContext = {
    claims: productionClaims,
    totalClaims: productionClaims.length,
    setClaims: (claimsList) => setClaimsHandler(claimsList),
    updateClaim: (newClaim) => updateClaimHandler(newClaim),
  };

  const setClaimsHandler = (claimsList) => { 
    // console.log(claimsList)   
    setProductionClaims(claimsList);
  };

  const updateClaimHandler = (newClaim) => {
    setProductionClaims((prevProductionClaims) => {
      return prevProductionClaims.concat(newClaim);
    });
  };
  
  // we return the constant's Provider. This provider needs to wrap around all the components that are interestind on interacting with the that context or need to consume data from that conext. Normally we wrap the <App /> in the index.js file so that all the components have access to the context.
  return (
    <ProductionContext.Provider value={currentContext}>
      {children}
    </ProductionContext.Provider>
  );
};

export default ProductionContext;
