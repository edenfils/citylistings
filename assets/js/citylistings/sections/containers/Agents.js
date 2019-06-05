import React, { Component } from 'react';
import AgentsLayout from '../components/AgentsLayout';
import AgentsHeader from '../components/AgentsHeader';
import AgentsList from '../components/AgentsList';

class Agents extends Component {
	state = {};

	render() {
		return (
			<AgentsLayout>
				<AgentsHeader />
				<AgentsList />
			</AgentsLayout>
		);
	}
}

export default Agents;
