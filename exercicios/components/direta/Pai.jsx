import Filho from "./Filho";

export default function Pai(props) {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <h1>Família {props.familia}</h1>
            <Filho nome='Diego' familia={props.familia} />
            <Filho nome='Diego 1' familia={props.familia} />
            <Filho {...props} />
        </div>
    )
}