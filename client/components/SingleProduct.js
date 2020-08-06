import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getSingleProductThunk} from '../store/singleProduct'

export class SingleProduct extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    componentDidMount(){
        console.log('THIS IS COMPOENENTDIDMOUNT')
        this.props.getSingleProduct(this.props.match.params.id);
    }

    render(){
        console.log('aaaaaaaaaaaahhhhhhhhhhhhhhhhhhhh')
        console.log('WHAT IS THIS PROPS', this.props.product)
        const name = this.props.product.name;
        console.log(product)
        return (
            <div>
                <div>
                    {name}
                    {/* <img src={this.product.imageUrl} /> */}

                </div> 
                <div>

                </div>
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
