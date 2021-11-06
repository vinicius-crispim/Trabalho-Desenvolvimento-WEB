import CadastroProduto from "components/CadastroProduto";

const CadastroProdutoTela = () => {
    return (
        <>
            <div>
                <div className="jumbotron d-grid col-6 mx-auto px-5" >
                    <br />
                    <br />
                    <h1 className="display-4">Cadastre um Produto</h1><br />
                </div>
                <CadastroProduto />
            </div>
        </>
    );
}

export default CadastroProdutoTela;