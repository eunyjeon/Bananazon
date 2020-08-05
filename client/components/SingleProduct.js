import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getSingleProductThunk} from '../store/singleProduct'

export class SingleProduct extends Component {

    render(){
        return (
            <div> Singles
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    product: state.product
})
const mapDispatchToProps = (dispatch) => ({
    getSingleProduct: (id) => dispatch(getSingleProductThunk(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
