import React from 'react';
import { Link, useParams } from 'react-router-dom';

const UserPage = () => {
	const {userId} = useParams()
	
	return ( 
		<>
			<h1>User Page</h1>
			<hr />
			<div>
				<button>
					<h3>
						<Link to="/users">Users List Page</Link>
					</h3>
				</button>
				<button>
					<h3>
						<Link to={`/users/${userId}/edit`}>User Edit Page</Link>
					</h3>
				</button>
			</div>
			<h3>User id: {userId}</h3>
		</>
	 );
}
 
export default UserPage;







