import { Component } from "react";
import { Link } from "react-router-dom";

/**
 * Campaign Row Component
 * It will draw a component in list view
 * @author Ron Bo <anydev1103@gmail.com>
 */
export default class CampaignRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campaign: props.campaign,
        };
        this.onPreviewClick = this.onPreviewClick.bind(this);
    }

    onPreviewClick() {
        this.props.onPreviewEvent(this.state.campaign.creatives);
    }

    render() {
        let { campaign } = this.state;

        return (
            <tr>
                <td>{campaign.name}</td>
                <td>{campaign.from}</td>
                <td>{campaign.to}</td>
                <td>{campaign.daily_budget}</td>
                <td>{campaign.total_budget}</td>
                <td>
                    <div className="btn-group btn-group-sm">
                        <button
                            type="button"
                            className="btn  btn-xs btn-secondary"
                            onClick={this.onPreviewClick}
                        >
                            Preview
                        </button>
                    </div>
                </td>
                <td>
                    <div
                        className="btn-group btn-group-sm"
                        role="group"
                        aria-label="First group"
                    >
                        <Link
                            to={"/edit/" + campaign.id}
                            className="btn btn-primary btn-xs"
                        >
                            Edit
                        </Link>
                    </div>
                </td>
            </tr>
        );
    }
}
