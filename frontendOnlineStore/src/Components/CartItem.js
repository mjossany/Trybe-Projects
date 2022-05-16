import React from 'react';
import PropTypes from 'prop-types';

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: props.quantity,
    };
    this.handlerQty = this.handlerQty.bind(this);
    this.renderButtonAddQuantity = this.renderButtonAddQuantity.bind(this);
  }

  handlerQty({ target }, id) {
    const { name } = target;
    const { quantity } = this.state;
    const { setQuantity } = this.props;
    const min = quantity === 1 && name === 'sub';
    const value = name === 'add' ? quantity + 1 : quantity - 1;
    this.setState({ quantity: min ? 1 : value }, () => {
      const { state } = this;
      setQuantity(state.quantity, id);
    });
  }

  renderButtonAddQuantity() {
    const { availableQuantity, id } = this.props;
    const { quantity } = this.state;
    if (quantity === availableQuantity) {
      return (
        <button
          type="button"
          onClick={ (event) => this.handlerQty(event, id) }
          name="add"
          data-testid="product-increase-quantity"
          disabled
        >
          +
        </button>);
    }
    return (
      <button
        type="button"
        onClick={ (event) => this.handlerQty(event, id) }
        name="add"
        data-testid="product-increase-quantity"
      >
        +
      </button>);
  }

  render() {
    const { title, thumbnail, price, removeItem, id } = this.props;
    const { quantity } = this.state;
    return (
      <div className="card">
        <button type="button" onClick={ () => removeItem(id) }>
          Remove
        </button>
        <h3 data-testid="shopping-cart-product-name">
          { title }
        </h3>
        <img src={ thumbnail } alt={ title } />
        <p>{ `R$: ${price.toFixed(2) * quantity}` }</p>
        <button
          type="button"
          onClick={ (event) => this.handlerQty(event, id) }
          name="sub"
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <span
          data-testid="shopping-cart-product-quantity"
        >
          { quantity }
        </span>
        { this.renderButtonAddQuantity() }
      </div>
    );
  }
}

CartItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  setQuantity: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
  removeItem: PropTypes.func.isRequired,
  availableQuantity: PropTypes.number.isRequired,
};

export default CartItem;
