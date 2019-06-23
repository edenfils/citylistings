import React, { Component } from 'react';
import AgentsLayout from '../components/AgentsLayout';
import AgentsHeader from '../components/AgentsHeader';
import AgentsList from '../components/AgentsList';
import Loader from '../../widgets/components/Loader';
import axios from 'axios';

class Agents extends Component {
	state = {
		agentsData: null,
		sortedAgents: null
	};

	componentDidMount() {
		this.getAgents();
	}

	getAgents = () => {
		const self = this;
		axios
			.get('/api/agents/')
			.then(function(response) {
				let data = response.data;
				let newData = self.arrayTo2DArray(data, 4);
				self.setState(
					{
						agentsData: data,
						sortedAgents: newData
					},
					() => {
						console.log(self.state);
					}
				);
			})
			.catch(function(error) {
				// handle error
				console.log(error);
			})
			.finally(function() {
				// always executed
			});
	};

	arrayTo2DArray = (list, howMany) => {
		let result = [];
		list = list.slice(0);
		while (list[0]) {
			result.push(list.splice(0, howMany));
		}
		return result;
	};

	render() {
		return (
			<AgentsLayout>
				<AgentsHeader />
				{this.state.sortedAgents !== null ? (
					<AgentsList agents={this.state.sortedAgents} />
				) : (
					<Loader />
				)}
			</AgentsLayout>
		);
	}
}

export default Agents;
