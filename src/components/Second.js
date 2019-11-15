import React from "react";
import Dropzone from './dropzone/Dropzone'
import ReactDOM from 'react-dom';


class Second extends React.Component {
    constructor() {
        super();
        this.state = {
            file: ''
        };
        this.render = this.render.bind(this);
    }

    callbackFiles = (files) => {
        this.setState({file: files[0]});
        console.log('added file');
    }

    render() {
        return (
            <div>
                <div key={0}>
                    <Dropzone
                        key={0}
                        callbackFiles={this.callbackFiles}
                    />
                </div>
                <div key={1} text-align='center' style={{margin: "70px auto"}}>
                    <button
                        disabled={!this.state.file}
                        type="button"
                        margin="auto auto"
                        onClick={
                            console.log('aaa')
                        }>
                        Download
                    </button>
                </div>
            </div>
        );
        /*        return Object.entries(this.state.face).map(([key, value], i) => {
            return value;
        });*/
    }
}

export default Second;
