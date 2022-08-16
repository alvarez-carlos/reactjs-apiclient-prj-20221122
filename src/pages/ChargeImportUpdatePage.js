import ChargeImportUpdateForm from "../components/chargeImport/ChargeImportUpdateForm"

import { useParams } from "react-router-dom"

const ChargeImportUpdatePage = () => {


    const { id } = useParams()

    return (
        <section>
            {/* <h1>Update Record</h1> */}
            {/* <ChargeImportUpdateForm createMeetup={createMeetup}/> */}
            <ChargeImportUpdateForm id={id}/>
            {/* { id } */}
        </section>
    )
}

export default ChargeImportUpdatePage