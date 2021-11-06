import EstoqueTable from "components/EstoqueTable";

const Home = () =>{
    return (
        <>
        <div className="container">
          <h1 className="display-1 text-primary text-center my-4">Produtos</h1>
          <h2 className=" text-center col-12 text-secondary">Verifique seus produtos a seguir</h2>
          <div className="row py-1 px-3">
            <div className="col-xxl-6">
              <EstoqueTable />
            </div>
          </div>
        </div>
      </>
    );
}

export default Home;