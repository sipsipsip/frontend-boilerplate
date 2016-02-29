import React, {Component} from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'
import Loading from '../../components/Loading.react'

class Unauthorized extends Component{
    render(){
        return <div style={{textAlign: 'center'}}>
            <h2> 401<small>You're not authorized</small></h2>
        </div>
    }
}

class AdminView extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.dispatch(actions.getCurrentUser());
    }
    
    render(){
        let { currentUser } = this.props
        let roles = currentUser.role_ids || [];

        if(roles.indexOf(1) < 0){
            return <Unauthorized/>
        }
        return <div style={{textAlign: 'center'}}>
                <Loading show={true}/>
                <h2> Welcome <small> Administrator {currentUser.nama}</small></h2>
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