import {Dispatch} from "react";
import * as actions from "../actions";
import {connect} from "react-redux";
import Footer from "../components/Footer";



function mapDispatchToProps(dispatch: Dispatch<actions.AppActions>) {
    return {
        filter: (filter: string) => dispatch(actions.filter_todo(filter)),
        submit: (text:string) => dispatch(actions.add_todo(text))
    }
}

export default connect(null, mapDispatchToProps)(Footer)