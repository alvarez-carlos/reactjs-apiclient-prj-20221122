import ProductionUpdateForm from "../components/production/ProductionUpdateForm"

import { useParams  } from 'react-router-dom'

const ProductionUpdatePage = () => {


    const { id } = useParams()

    return (
        <section>
            {/* <h1>Update Record</h1> */}
            {/* <ChargeImportUpdateForm createMeetup={createMeetup}/> */}
            <ProductionUpdateForm id={id}/>
            {/* { id } */}
        </section>
    )
}

export default ProductionUpdatePage