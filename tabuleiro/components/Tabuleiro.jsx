import Coluna from "./Coluna";

export default function Tabuleiro() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
        }}>
            <Coluna />
            <Coluna preta />
            <Coluna />
            <Coluna preta />
            <Coluna />
            <Coluna preta />
            <Coluna />
            <Coluna preta />
        </div>
    )
}