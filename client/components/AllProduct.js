import React from 'react';
import {connect} from 'react-redux';
import { allProductThunk } from '../store/allProduct'

class AllProduct extends React.Component {
  componentDidMount() {
    this.props.getAllProducts()
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <p>
          `${this.props}`
        </p>
        {/* <h2 className="section-title">Candies</h2>
        <ul className="container">
          {this.props.candies.map(candy => (
            <div className="card" key={candy.id}>
              <Candy candy={candy} />
            </div>
          ))}
        </ul> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.allProduct
});

const mapDispatchToProps = (dispatch) => ({
  getAllProducts: () => dispatch(allProductThunk())
});

export default connect(mapStateToProps, mapDispatchToProps)(AllProduct);
