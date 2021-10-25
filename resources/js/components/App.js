import { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CampaignList from "./CampaignList";
import CampaignContainer from "./CampaignContainer";

/**
 * Main APP Component
 * @author Ron Bo <anydev1103@gmail.com>
 */
export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <Switch>
                                    <Route exact path="/">
                                        <CampaignList />
                                    </Route>
                                    <Route path="/add">
                                        <CampaignContainer />
                                    </Route>
                                    <Route path="/edit/:campaignId">
                                        <CampaignContainer />
                                    </Route>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}
