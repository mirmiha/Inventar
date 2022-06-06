import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    BrowserRouter,
    
} from "react-router-dom";
import Navbar from "./app/Navbar";
import {ScrollTop} from "./app/ScrollTop";
import {Footer} from "./app/Footer";
import Home from "./Home";
import {CategoriesList, AddCategoryForm, EditCategoryForm} from "./features/category";
import {ProductsList, AddProductForm, EditProductForm} from "./features/product";
import {SuppliersList, AddSupplierForm, EditSupplierForm} from "./features/supplier";
import LoginPage from "./login";
import {initializeApp} from 'firebase/app';
import { config } from "./config/config";
import AuthRoute from "./components/AuthRoute";

initializeApp(config.firebaseConfig);


export interface IApplicationProps {}

/*
const Application: React.FunctionComponent<IApplicationProps> = (props) => {
    return (
        <BrowserRouter>
            <Route>
                <Route path="/home" element={<Home/>}/>
            </Route>
        </BrowserRouter>
    )
}
*/

function App() {
    return (
        <>
            <div className="min-vh-100">
                <Router>
                    <Navbar/>
                    <ScrollTop />
                    <Switch>
                        <AuthRoute>
                        <Route exact path="/" component={Home} />
                        

                        <Route exact path="/login"  component={LoginPage} />

                        <Route exact path="/categories" component={CategoriesList} />
                        <Route exact path="/categories/create" component={AddCategoryForm} />
                        <Route exact path="/categories/:categoryId" component={EditCategoryForm} />

                        <Route exact path="/products" component={ProductsList} />
                        <Route exact path="/products/create" component={AddProductForm} />
                        <Route exact path="/products/:productId" component={EditProductForm} />


                        <Route exact path="/suppliers" component={SuppliersList} />
                        <Route exact path="/suppliers/create" component={AddSupplierForm} />
                        <Route exact path="/suppliers/:supplierId" component={EditSupplierForm} />

                        </AuthRoute>

                        


                    </Switch>
                </Router>
            </div>
            <Footer/>
        </>
    );
}

export default App;
