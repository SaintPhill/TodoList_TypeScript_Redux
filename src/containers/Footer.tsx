import {Dispatch} from "react";
import * as actions from "../actions";
import {connect} from "react-redux";
import Footer from "../components/Footer";
import {StoreState} from "../types";

function mapStateToProps({filter}: StoreState) {
    return {
        filterName: filter
    }
}

function mapDispatchToProps(dispatch: Dispatch<actions.AppActions>) {
    return {
        filter: (filter: string) => dispatch(actions.filter_todo(filter)),
        submit: (text:string) => dispatch(actions.add_todo(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)