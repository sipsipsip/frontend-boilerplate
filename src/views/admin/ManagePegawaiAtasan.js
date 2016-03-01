import React, {Component} from 'react'
import _ from 'lodash'
import * as actions from '../../redux/actions'
import { connect } from 'react-redux'

class ManagePegawaiAtasan extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
    }
    
    render(){
        return <div>

            </div>
    }
}

ManagePegawaiAtasan.propTypes = {

}

ManagePegawaiAtasan.defaultProps = {

}

function mapStateToProps(state){
    return {
        currentUser: state.user,
        global: state.global
    }
}

export default connect(mapStateToProps)(ManagePegawaiAtasan)