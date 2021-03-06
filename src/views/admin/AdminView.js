import React, {Component} from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'

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

        let { currentUser, global } = this.props
        let roles = currentUser.role_ids || [];

        if(global.isFetching){
            return <div></div>
        }

        if(roles.indexOf(1)){
            return <Unauthorized/>
        }

        return <div style={{textAlign: 'center'}}>
                <h2> Welcome <small> Administrator {currentUser.nama}</small></h2>
                <button onClick={()=> {this.props.dispatch(actions.setFetchingForMs())}}>
                    set applicationIsFetching
                </button>
                {this.props.children}
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
        global: state.global
    }
}

export default connect(mapStateToProps)(AdminView)