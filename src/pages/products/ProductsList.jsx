
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
//import { getProducts } from "../../services/Product.service";

const ProductsList = () => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      document.title = "Productos";
      //getProducts().then((res) => {
       // setProducts(res.data);
      //});
    }, []);
    return (
      <main>
        <div className="mt-5 p-5">
          <div className="row">
            <div className="col-md-2">
            </div>
            <div className="col-md-10">
              <div className="row mt-5">
                <div className="col-md-12">
                  <h1 className="display-5">Nuestros Autos</h1>
                </div>
              </div>
              <div className="row">
                {products
                  .map((product) => {
                    return (
                      <div className="col-sm-6 col-md-4" key={product._id}>
                        <div className="card mb-4">
                          <img
                            src={product.image}
                            className="card-img-top"
                            alt="test"
                          />
  
                          <div className="card-body">
                            <span className="badge text-bg-primary">
                              {product.category}
                            </span>
                            <h3>${product.price}</h3>
                            <h4 className="card-title">{product.name}</h4>
                            <p className="card-text">{product.description}</p>
  
                            <div className="d-grid gap-2">
                              <button
                                type="button"
                                className="btn btn-primary btn-sm"
                                onClick={() => addProductToCart(product)}
                              >
                                Agregar al carrito
                              </button>
                              <Link
                                to={`/detail-product/${product._id}`}
                                className="btn btn-warning btn-sm"
                              >
                                Detalle
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  };

  export default ProductsList;
  