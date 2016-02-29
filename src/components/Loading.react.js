import React, {Component} from 'react'
import _ from 'lodash'
import Spinner from 'react-spinkit'

class Loading extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return <div>
            <div
                style={{width: '50px', height: '10px', display: ( this.props.show ? 'inline-block' : 'none'), textAlign: 'center'}}
                >
                <Spinner spinnerName="rotating-plane" noFadeIn/>
            </div>

            </div>
    }
}

Loading.propTypes = {

}

Loading.defaultProps = {
    show: true
}

export default Loading