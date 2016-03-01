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
        let { global, currentUser } = this.props;
        return <div>
                {global.hasOwnProperty('users_and_atasan') ? global.users_and_atasan.data.length : 'should display length'}
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