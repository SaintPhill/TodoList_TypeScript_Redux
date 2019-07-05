import {Dispatch} from "react";
import * as actions from "../actions";
import {connect} from "react-redux";
import Footer from "../components/Footer";
import {StoreState} from "../types";

function mapStateToProps({filter}: StoreState) {
    return {
        actualFilter: filter
    }
}

function mapDispatchToProps(dispatch: Dispatch<actions.AppActions>) {
    return {
        setFilter: (filter: string) => dispatch(actions.filter_todo(filter)),
        confirmInput: (text:string) => dispatch(actions.add_todo(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)