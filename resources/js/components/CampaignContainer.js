import { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import CampaignForm from "./CampaignForm";

/**
 * Campaign Conainter Component
 * It is wrapper of campaign form.
 * @author Ron Bo <anydev1103@gmail.com>
 */
class CampaignContainer extends Component {
    constructor(props) {
        super(props);

        const { campaignId } = props.match.params;

        this.state = {
            campaignId: campaignId === undefined ? "" : campaignId,
            campaign: {
                id: "",
                name: "",
                from: "",
                to: "",
                total_budget: 0,
                daily_budget: 0,
                creatives: [],
            },
            error: null,
            isLoading: true,
        };
    }

    //Get a campaign data at the beginning
    componentDidMount() {
        const { campaignId } = this.state;
        if (campaignId !== "") {
            //You should get campaign from server.
            axios
                .get("/api/campaign/" + campaignId)
                .then((response) => {
                    const result = response.data;
                    if (result.success === true) {
                        const campaign = result.data;
                        this.setState({ campaign, error: null });
                    } else {
                        toastr["error"](result.message);
                    }
                })
                .catch((error) => {
                    toastr["error"](result.message);
                    this.setState({ error: error.message });
                })
                .finally(() => {
                    this.setState({ isLoading: false });
                });
        } else {
            this.setState({ isLoading: false });
        }
    }

    render() {
        let { campaignId, campaign, isLoading, error } = this.state;
        return (
            <>
                <div className="card-header">
                    <h3>
                        {campaignId ? "Edit" : "Add"} Campaign{" "}
                        <Link to="/" className="btn btn float-right">
                            &lt;&lt; Back to list
                        </Link>
                    </h3>
                </div>
                <div className="card-body">
                    {(() => {
                        if (isLoading) return <h5>Loading...</h5>;
                        else if (error)
                            return <h5 className="text-danger">{error}</h5>;
                        else return <CampaignForm campaign={campaign} />;
                    })()}
                </div>
            </>
        );
    }
}

export default withRouter(CampaignContainer);
