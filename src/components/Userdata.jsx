import React from "react";
// import './App.css';
class Userdata extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch("http://localhost:8080/user-form/data")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json['users'],
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Please wait some time.... </h1> </div> ;

		return (
		<div className = "App">
			<h1> Fetch data from an api in react </h1> {
				items.map((item,_id) => (
				<ol key = { item.id } >
					User_Name: { item.name },
					Phone_Number: { item.phone },
					User_Email: { item.email },
					User_DOB: { item.dob },
					</ol>
				))
			}
		</div>
	);
}
}

export default Userdata;
