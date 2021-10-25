import { Component } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import moment from "moment";
import CreativeFileUpload from "./CreativeFileUpload";
import toastr from "toastr";

import "react-datepicker/dist/react-datepicker.css";
import "toastr/build/toastr.min.css";

/**
 * Campaign Form Component
 * You can edit form including upload too
 */
export default class CampaignForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campaign: props.campaign,
        };

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeFromDate = this.onChangeFromDate.bind(this);
        this.onChangeToDate = this.onChangeToDate.bind(this);
        this.onChangeDailyBudget = this.onChangeDailyBudget.bind(this);
        this.onChangeTotalBudget = this.onChangeTotalBudget.bind(this);
        this.updateCreatives = this.updateCreatives.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    //Change Event Definition
    onChangeName(evt) {
        const { campaign } = this.state;
        campaign.name = evt.target.value;
        this.setState({ campaign });
    }

    onChangeFromDate(date) {
        const { campaign } = this.state;
        campaign.from = moment(date).format("MM/DD/YYYY");
        this.setState({ campaign });
    }

    onChangeToDate(date) {
        const { campaign } = this.state;
        campaign.to = moment(date).format("MM/DD/YYYY");
        this.setState({ campaign });
    }

    onChangeDailyBudget(evt) {
        const { campaign } = this.state;
        campaign.daily_budget = evt.target.value;
        this.setState({ campaign });
    }

    onChangeTotalBudget(evt) {
        const { campaign } = this.state;
        campaign.total_budget = evt.target.value;
        this.setState({ campaign });
    }

    updateCreatives(creatives) {
        const { campaign } = this.state;
        campaign.creatives = creatives;
        this.setState({ campaign });
    }

    //Handle form submit
    handleFormSubmit(evt) {
        evt.preventDefault();
        const { campaign } = this.state;
        axios
            .post("/api/campaign/store", campaign)
            .then((response) => {
                let result = response.data;
                if (result.success === true) {
                    toastr["success"](result.message);
                } else {
                    toastr["error"](result.message);
                }
            })
            .catch((error) => {
                toastr["error"](error.message);
            })
            .finally(() => {});
    }

    render() {
        let { campaign } = this.state;

        return (
            <div className="row justify-content-md-center">
                <div className="col-md-6">
                    <form onSubmit={this.handleFormSubmit}>
                        <div className="form-group">
                            <label>Campaign Name</label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={this.onChangeName}
                                value={campaign.name}
                            />
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>From</label>
                                    <DatePicker
                                        selected={
                                            campaign.from !== "" &&
                                            new Date(campaign.from)
                                        }
                                        onChange={this.onChangeFromDate}
                                        dateFormat="MM/dd/yyyy"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>To</label>
                                    <DatePicker
                                        selected={
                                            campaign.to !== "" &&
                                            new Date(campaign.to)
                                        }
                                        onChange={this.onChangeToDate}
                                        dateFormat="MM/dd/yyyy"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Daily Budget</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        onChange={this.onChangeDailyBudget}
                                        value={campaign.daily_budget}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label>Total Budget</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    onChange={this.onChangeTotalBudget}
                                    value={campaign.total_budget}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Creatives</label>
                            <div>
                                <CreativeFileUpload
                                    creatives={campaign.creatives}
                                    onUpdateFile={this.updateCreatives}
                                />
                            </div>
                        </div>

                        <Link
                            to="/"
                            className="btn btn-secondary float-right ml-2"
                        >
                            Cancel
                        </Link>
                        <button
                            type="submit"
                            className="btn btn-primary float-right"
                        >
                            Save
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}
