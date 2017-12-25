import React from 'react';
import Test from '../../components/test';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as nameInfoActionsFromOther from '../../actions';

class TestContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        console.log(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.value}</h1>
                <Test prarentCHandle={this.prarentCHandle.bind(this)} value={this.props.value}/>
            </div>
        )
    }


    prarentCHandle(name) {
        const actions = this.props.nameInfo;
        actions.update(name);
        console.log(actions.update(name));
    }
}

function mapStateToProps(state) {
    return {
        value: state.pp.value
    };
}

function mapDispatchToProps(dispatch) {
    return {
        nameInfo: bindActionCreators(nameInfoActionsFromOther, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TestContainer);
