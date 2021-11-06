import CadastroTipoProduto from "components/CadastroTipoProduto";

const CadastroTipoProdutoTela = () => {
    return (
        <>
            <div>
                <div className="jumbotron d-grid col-6 mx-auto">
                    <br />
                    <br />
                    <h1 className="display-4 text-center">Cadastre uma categoria</h1><br />
                </div>
                <CadastroTipoProduto />
            </div>
        </>
    );
}

export default CadastroTipoProdutoTela;