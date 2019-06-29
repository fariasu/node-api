import React from 'react';

export default (props) => (
	<div>
		<h1>Parte 1</h1>
		<h2>Parte 2</h2>
	</div>
);

// solução 1 mais usada
// export default (props) => (
// 	<div>
// 		<h1>Parte 1</h1>
// 		<h2>Parte 2</h2>
// 	</div>
// );

// solução 2
// export default (props) => (
// 	<React.Fragment>
// 		<h1>Parte 1</h1>
// 		<h2>Parte 2</h2>
// 	</React.Fragment>
// );

// solução 3
// export default (props) => [ <h1>Parte 1</h1>, <h2>Parte 2</h2> ];
