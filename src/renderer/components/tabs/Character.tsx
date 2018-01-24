import Account from "@account";
import classnames from "classnames";
import * as React from "react";
import { Button, Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap";
import Jobs from "./Jobs";
import Spells from "./Spells";
import Stats from "./Stats";

interface ICharacterProps {
  account: Account;
}

interface ICharacterStates {
  activeTab: string;
}

export default class Character extends React.Component<ICharacterProps, ICharacterStates> {

  constructor(props: ICharacterProps) {
    super(props);
    this.state = {
      activeTab: "0",
    };
  }

  public render() {
    return (
      <Container>
        <Row>
          <Nav pills>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "0" })}
                onClick={() => { this.toggle("0"); }}
              >
                Stats
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "1" })}
                onClick={() => { this.toggle("1"); }}
              >
                Spells
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "2" })}
                onClick={() => { this.toggle("2"); }}
              >
                Jobs
              </NavLink>
            </NavItem>
          </Nav>
        </Row>
        <hr />
        <Row>
          <Col>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="0">
                <Stats account={this.props.account} />
              </TabPane>
              <TabPane tabId="1">
                <Spells account={this.props.account} />
              </TabPane>
              <TabPane tabId="2">
                <Jobs account={this.props.account} />
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </Container>
    );
  }

  private toggle(tab: string) {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  }
}
