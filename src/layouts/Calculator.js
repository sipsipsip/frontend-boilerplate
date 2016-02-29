import React, {Component} from 'react'
import { connect } from 'react-redux'
import Loading from '../components/Loading.react'

import _ from 'lodash'

class CalculatorLayout extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return <div>
            <div style={{textAlign:'center'}}>
                <Loading show={this.props.global.isFetching}/>
            </div>
            {this.props.children}
            </div>
    }
}

CalculatorLayout.propTypes = {

}

CalculatorLayout.defaultProps = {

}

function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps)(CalculatorLayout)
