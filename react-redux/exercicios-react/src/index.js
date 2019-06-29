import React from 'react';
import ReactDOM from 'react-dom';
// // import FirstComponent from './components/FirstComponent';
// import { CompA, CompB } from './components/TwoComponents';
// import MultiElements from './components/MultiElements';
// import FamilySilva from './components/FamilySilva';
// import Family from './components/Family';
// import Member from './components/Member';
// import ComponentWithFunction from './components/ComponentWithFunction'
// import Pai from './components/Pai'
// import ComponenteClasse from './components/ComponenteClasse'
// import Contador from './components/Contador'
import Hook from './components/Hook'

const jsx = <h1>Olá React</h1>;
const element = document.getElementById('root');
ReactDOM.render(
	<div>
		<Hook />
		{/* <Contador numeroInicial={100} /> */}
		{/* <ComponenteClasse valor="Sou um Componente de Classe!" /> */}
		{/* <Pai /> */}
		{/* <ComponentWithFunction /> */}
		{/* <Family surname="Pereira"> */}
		{/* <Member name="Andre " /> */}
		{/* <Member name="Mariana " /> */}
		{/* </Family> */}
		{/* <FamilySilva /> */}
		{/* <MultiElements /> */}
		{/* {<CompA valor="Olá eu sou o A!" />} */}
		{/* {<CompB valor="B na área!" />} */}
		{/* <FirstComponent valor="Bom Dia!" /> */}
	</div>,
	element
);

// ReactDOM.render(jsx, element);
