function gerarLista(quantidade) {
    const list = []
    for (let i = 1; i <= quantidade; i++) {
        list.push(<span>{i + ','}</span>)
    }

    return list
}

export default function lista1() {
    return (
        <div>{gerarLista(10)}</div>
    )
}
