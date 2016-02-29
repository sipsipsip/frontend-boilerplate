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
        let { currentUser } = this.props
        return <div>
                Welcome Admin {currentUser.nama} : ids = {currentUser.hasOwnProperty('role_ids') ? currentUser.role_ids[0] : 'Non Admin Leave!'}
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