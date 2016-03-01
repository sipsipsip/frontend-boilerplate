import React, {Component} from 'react'
import { connect } from 'react-redux'
import Loading from '../components/Loading.react'
import * as actions from '../redux/actions'


import _ from 'lodash'

class BaseLayout extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.dispatch(actions.getCurrentUser());
        this.props.dispatch(actions.getUsersAndAtasan());
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

BaseLayout.propTypes = {

}

BaseLayout.defaultProps = {

}

function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps)(BaseLayout)
