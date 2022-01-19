import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachItem => {
        total += eachItem.price * eachItem.quantity
      })
      return (
        <>
          <div className="order-details-container">
            <h1 className="order-total-text">
              Order Total: <span className="order-value">Rs {total}/-</span>
            </h1>
            <p className="order-details">{cartList.length} items in cart</p>
            <button type="button" className="checkout-btn sm-none">
              Checkout
            </button>
          </div>
          <button type="button" className="checkout-btn lg-none">
            Checkout
          </button>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
