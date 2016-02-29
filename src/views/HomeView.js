import React, {Component} from 'react'
import {render} from 'react-dom'
import _ from 'lodash'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

class HomeView extends Component{
    constructor(props){
        super(props)
    }

    
    render(){
        let { currentUser } = this.props
        return <div style={{textAlign: 'center'}}>
                <h3>{currentUser.nama} <small>{ currentUser.hasOwnProperty('roles') && currentUser.roles.length ? currentUser.roles[0].title : ''}</small></h3>
            </div>
    }
}

HomeView.propTypes = {

}

HomeView.defaultProps = {
    currentUser : {}
}

HomeView.state = {

}


function mapStateToProps(state){
    return {
        currentUser: state.user
    }
}

export default connect(mapStateToProps)(HomeView)