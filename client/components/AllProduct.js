import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { allProductThunk } from '../store/allProduct';
// import { useToasts } from 'react-toast-notifications';
// import { ToastDemo } from './Toast';
import { getCartThunk, createCartThunk, addToCartThunk } from '../store/cart';
import { me } from '../store/user';

export class AllProduct extends React.Component {
  constructor() {
    super();
    this.addToCartHandler = this.addToCartHandler.bind(this);
    this.state = {
      addToCartCount: 0,
    };
  }

  async componentDidMount() {
    await this.props.getAllProducts();

    // assuming that a user is signed in
    await this.props.getUser();
    if (this.props.user) {
      await this.props.getCart(this.props.user.id);
    }
  }

  async addToCartHandler(productId) {
    console.log('Add To Cart Clicked for product id:', productId);
    const quantity = 1;

    const userId = this.props.user.id;
    console.log('able to get userId in props in addToCartHandler', userId);
    console.log('cart before creating cart', this.props.cart); // undefined

    if (this.props.cart === undefined) {
      await this.props.createCart(userId);
      await this.props.getCart(userId);
      const orderId = this.props.cart.id;
      console.log(orderId, 'can get orderId after creating cart');
      await this.props.addToCart(orderId, productId, quantity);
      const count = this.state.addToCartCount + 1;
      // working
      this.setState({
        ...this.state,
        addToCartCount: count,
      });
    } else {
      const orderId = this.props.cart.id;
      console.log(orderId, 'can get order id if we already have cart');
      await this.props.addToCart(orderId, productId, quantity);
      const count = this.state.addToCartCount + 1;
      this.setState({
        ...this.state,
        addToCartCount: count,
      });
    }

    alert('Added to Cart'); // will hopefully be toast notification
  }

  render() {
    const products = this.props.products;
    console.log(this.props);

    return (
      <div>
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <Link to={`/products/${product.id}`}>
              <h2> Product: {product.name}</h2>
              <img src={product.imageUrl} />
              <h3>Price : ${product.price}</h3>
            </Link>

            <button
              type="button"
              onClick={() => this.addToCartHandler(product.id)}
            >
              {' '}
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
  user: state.user,
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  getAllProducts: () => dispatch(allProductThunk()),
  getUser: () => dispatch(me()),
  getCart: (userId) => dispatch(getCartThunk(userId)),
  createCart: (userId) => dispatch(createCartThunk(userId)),
  addToCart: (orderId, productId, quantity) =>
    dispatch(addToCartThunk(orderId, productId, quantity)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllProduct);
