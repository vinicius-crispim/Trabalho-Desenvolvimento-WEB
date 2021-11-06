import CadastroProdutoTela from "pages/CadastroProduto";
import CadastroTipoProdutoTela from "pages/CadastroTipoProduto";
import Home from "pages/Home";
import VisualizarProdutoTela from "pages/VisualizarProdutoTela";
import { Route, Routes } from "react-router";

const RoutesTelas = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cadastroproduto" element={<CadastroProdutoTela/>} />
            <Route path="/visualizaproduto" element={<VisualizarProdutoTela/>} />
            <Route path="/cadastrocategoria" element={<CadastroTipoProdutoTela/>} />
        </Routes>
    );
}

export default RoutesTelas;