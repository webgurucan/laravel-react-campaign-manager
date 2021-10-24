import React from "react";
import axios from "axios";
import toastr from "toastr";

/**
 * Creative File Upload Component
 * You can upload files using this component.
 * It supports only jpg, png, gif images
 */
export default class CreativeFileUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            creatives: props.creatives,
        };

        this.onFileChange = this.onFileChange.bind(this);
    }

    onFileChange = (event) => {
        let files = [...event.target.files];

        files = files.filter(
            (file) =>
                file.type === "image/jpg" ||
                file.type === "image/jpeg" ||
                file.type === "image/png" ||
                file.type === "image/gif"
        );

        // Upload Files Immediatley
        if (files.length > 0) {
            this.uploadFiles(files);
        } else {
            //No files selected.
        }
    };

    uploadFiles = (files) => {
        // Create an object of formData
        const formData = new FormData();

        // Update the formData object
        files.map((file) => {
            formData.append("file[]", file, file.name);
        });

        // Request made to the backend api
        // Send formData object
        axios
            .post("/api/campaign/uploadfile", formData)
            .then((response) => {
                let result = response.data;
                if (result.success === true) {
                    let { creatives } = this.state;
                    creatives = creatives.concat(result.files);
                    this.setState({ creatives });

                    //Update parent status
                    this.props.onUpdateFile(creatives);
                    toastr["success"](result.message);
                } else {
                    toastr["error"](result.message);
                }
            })
            .catch((error) => {
                toastr["error"](error.message);
            })
            .finally(() => {});
    };

    render = () => {
        let { creatives } = this.state;

        return (
            <>
                <div>
                    <ul className="list-group creative-list">
                        {creatives.map((creative, index) => (
                            <li key={index} className="list-group-item">
                                <img src={creative} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <p>
                        <i>Note: allowed file format (*.jpg, *.png, *.gif)</i>
                    </p>
                    <input type="file" multiple onChange={this.onFileChange} />
                </div>
            </>
        );
    };
}
