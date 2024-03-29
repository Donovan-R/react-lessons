import { useParams } from "react-router-dom";
import { products } from "../../../data";
import { Link } from "react-router-dom";

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { name, image } = product;
  return (
    <section className="section product">
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <Link to="/products">Voir les produits</Link>
    </section>
  );
};

export default SingleProduct;
