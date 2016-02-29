import React, {Component} from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'

class AdminView extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.dispatch(actions.getCurrentUser());
    }
    
    render(){
        return <div>
                Welcome Admin {this.props.currentUser.nama} - {this.props.currentUser.role_ids[0]}
            </div>
    }
}

AdminView.propTypes = {

}

AdminView.defaultProps = {
    currentUser: {}
}

function mapStateToProps(state){
    return {
        currentUser: state.user,
    }
}

export default connect(mapStateToProps)(AdminView)