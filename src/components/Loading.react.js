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
                style={{
                    width: '70',
                    height: '10px',
                    display: ( this.props.show ? 'inline-block' : 'none'),
                    textAlign: 'center',
                    position: ( this.props.fixed ? 'fixed' : ''),
                    top: '70px',
                    right: '10px'
                    }}
                >
                <Spinner spinnerName="three-bounce" noFadeIn/>
            </div>

            </div>
    }
}

Loading.propTypes = {

}

Loading.defaultProps = {
    show: true,
    fixed: false
}

export default Loading