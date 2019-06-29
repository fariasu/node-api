import React from 'react';
import { childProps } from '../utils/utils';

export default (props) => (
	<div>
		<h1>Family</h1>
		{childProps(props)}
		{/* {React.Children.map(props.children, (child) => {
			return React.cloneElement(child, { ...props });
		})} */}
		{/* {React.cloneElement(props.children, { ...props })} */}
		{/* {React.cloneElement(props.children, props )} */}
		{/* {React.cloneElement(props.children, { surname: props.surname })} */}
		{/* {props.children} */}
	</div>
);
