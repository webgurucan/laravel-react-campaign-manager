import { Component } from "react";
import { Link } from "react-router-dom";

import CampaignRow from "./CampaignRow";
import CreativePreview from "./CreativePreview";

/**
 * Campaign List Component
 * It will get all campaigns from server and render on frontend.
 * It will render campaign in table format
 * @author Ron Bo <anydev1103@gmail.com>
 */
export default class CampaignList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campaigns: {},
            error: null,
            isLoading: true,
            previewCreatives: [],
            showPreview: false,
        };
        this.doPreviewCreatives = this.doPreviewCreatives.bind(this);
    }

    //Show preview of creatives
    doPreviewCreatives(creatives) {
        if (Array.isArray(creatives) && creatives.length > 0) {
            this.setState({ previewCreatives: creatives, showPreview: true });
        } else {
            this.setState({ previewCreatives: [], showPreview: false });
        }
    }

    //Get campaigns at the beginning
    componentDidMount() {
        axios
            .get("/api/campaigns")
            .then((response) => {
                const campaigns = response.data;
                this.setState({ campaigns, error: null });
            })
            .catch((error) => {
                this.setState({ error: error.message });
            })
            .finally(() => {
                this.setState({ isLoading: false });
            });
    }

    //Render View
    render() {
        const { isLoading, campaigns, error, showPreview, previewCreatives } =
            this.state;
        return (
            <>
                <div className="card-header">
                    <h3>
                        Campaign List
                        <Link to="/add" className="btn btn-primary float-right">
                            + Add
                        </Link>
                    </h3>
                </div>
                <div className="card-body">
                    {(() => {
                        if (isLoading) return <h5>Loading...</h5>;
                        else if (error)
                            return <h5 className="text-danger">{error}</h5>;
                        else if (campaigns.length === 0)
                            return (
                                <h3 className="error text-center">No data</h3>
                            );
                        else
                            return (
                                <>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>From</th>
                                                <th>To</th>
                                                <th>Daily Budget</th>
                                                <th>Total Budget</th>
                                                <th>Creative</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {campaigns.map((campaign) => (
                                                <CampaignRow
                                                    key={campaign.id}
                                                    campaign={campaign}
                                                    onPreviewEvent={
                                                        this.doPreviewCreatives
                                                    }
                                                />
                                            ))}
                                        </tbody>
                                    </table>
                                    <CreativePreview
                                        show={showPreview}
                                        creatives={previewCreatives}
                                    />
                                </>
                            );
                    })()}
                </div>
            </>
        );
    }
}
