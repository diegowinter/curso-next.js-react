import Lista from "../../components/Lista";
import Item from '../../components/Item';

export default function componenteComFilho() {
    return (
        <div>
            <Lista>
                <Item conteudo='Item #01 child' />
                <Item conteudo='Item #02 child' />
                <Item conteudo='Item #03 child' />
            </Lista>
        </div>
    )
}