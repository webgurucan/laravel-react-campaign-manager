import { Component } from "react";
import { Modal } from "react-bootstrap";
import { Slide } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

/**
 * Creative Preview Component
 * It will show the preview of creatives in a campaign.
 * It will popup modal and show the creatives in slideshow.
 * @author Ron Bo <anydev1103@gmail.com>
 */
export default class CreativePreview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: props.show,
            creatives: props.creatives,
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //If you receive new props, it will render the component again
        if (prevState.show !== this.props.show) {
            this.setState({
                show: this.props.show,
                creatives: this.props.creatives,
            });
        }
    }

    render() {
        let { show, creatives } = this.state;

        return (
            <>
                <Modal show={show} onHide={this.handleClose}>
                    <Modal.Header>
                        <Modal.Title>Preview</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <div className="slide-container preview-creatives">
                            <Slide>
                                {creatives.map((creative, index) => {
                                    return (
                                        <div key={index} className="each-fade">
                                            <img src={creative} />
                                        </div>
                                    );
                                })}
                            </Slide>
                        </div>
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}
