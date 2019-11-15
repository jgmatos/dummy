import React, {Component} from 'react'

class Dropzone extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hightlight: false,
            file: ''
        }
        this.fileInputRef = React.createRef()

        this.openFileDialog = this.openFileDialog.bind(this)
        this.onFilesAdded = this.onFilesAdded.bind(this)
        this.onDragOver = this.onDragOver.bind(this)
        this.onDragLeave = this.onDragLeave.bind(this)
        this.onDrop = this.onDrop.bind(this)
        this.getFile = this.getFile.bind(this)

    }

    openFileDialog() {
        if (this.props.disabled) return
        this.fileInputRef.current.click()
    }

    onFilesAdded(evt) {
        if (this.props.disabled) return
        const files = evt.target.files
        this.setState({file: evt.target.files[0]})
        this.props.callbackFiles(files);
        if (this.props.onFilesAdded) {
            const array = this.fileListToArray(files)
            this.props.onFilesAdded(array)
        }
    }

    onDragOver(evt) {
        evt.preventDefault()

        if (this.props.disabled) return

        this.setState({hightlight: true})
    }

    onDragLeave() {
        this.setState({hightlight: false})
    }

    onDrop(event) {
        event.preventDefault()

        if (this.props.disabled) return

        const files = event.dataTransfer.files
        if (this.props.onFilesAdded) {
            const array = this.fileListToArray(files)
            this.props.onFilesAdded(array)
        }
        this.setState({hightlight: false})
    }

    fileListToArray(list) {
        const array = []
        for (var i = 0; i < list.length; i++) {
            array.push(list.item(i))
        }
        return array
    }

    getFile() {
        return this.state.file;
    }

    render() {
        return (
            <div
                className={`Dropzone ${this.state.hightlight ? 'Highlight' : ''}`}
                onDragOver={(e) => this.onDragOver(e)}
                onDragLeave={this.onDragLeave}
                onDrop={(e) => this.onDrop(e)}
                onClick={this.openFileDialog}
                style={{cursor: this.props.disabled ? 'default' : 'pointer'}}
            >
                <input
                    ref={this.fileInputRef}
                    className="FileInput"
                    type="file"
                    multiple
                    onChange={(e) => this.onFilesAdded(e)}
                    aaaaaaaaaaaaa={this}
                />
                <img
                    alt="upload"
                    className="Icon"
                    src="baseline-cloud_upload-24px.svg"
                />
                <span>Upload Files</span>
            </div>
        )
    }
}

export default Dropzone