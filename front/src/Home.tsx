const Home = () => {
    return (
        <div className="container-fluid pt-3">
            <div className="card border-0 rounded-0 text-white bg-info">
                <div className="card-body">
                    <h2 className="card-title">Inventar</h2>
                    <p className="card-text">Upravljanje z inventarjem</p>
                </div>
            </div>

            <div className="card border-0 rounded-0 text-white bg-secondary">
                <div className="card-body">
                    <h3 className="card-title">Funkcionalnosti</h3>
                </div>
            </div>

            <div className="card-group">
                <div className="card border-0 rounded-0 text-white bg-secondary">
                    <div className="card-body">
                        <h5 className="card-title">Upravljanje z inventarjem</h5>
                        <p className="card-text">
                            Dodajaj v inventar
                            
                        </p>
                    </div>
                </div>

                <div className="card border-0 rounded-0 text-white bg-secondary">
                    <div className="card-body">
                        <h5 className="card-title">Upravljaj z inventarjem</h5>
                        <p className="card-text">
                            Dodajaj v naprave
                        </p>
                        <p className="card-text">
                           Kupi naprave
                        </p>
                    </div>
                </div>

                <div className="card border-0 rounded-0 text-white bg-secondary">
                    <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text">
                            
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
