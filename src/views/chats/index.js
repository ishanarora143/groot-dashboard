import React from 'react'
import {connect} from 'react-redux';


function Chats(props) {
    return (
        <div>
            I am chat component
        </div>
    )
}
const mapStateToProps = (state)=>({
    auth:state.login.auth,
})
export default connect(mapStateToProps)(Chats)
