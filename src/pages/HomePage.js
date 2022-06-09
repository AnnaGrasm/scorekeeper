import PlayerForm from "../components/PlayerForm/PlayerForm"

export default function HomePage({onHandleAdd}){

    return (
<>
<PlayerForm handleSubmit={onHandleAdd} />
</>

    )
}


