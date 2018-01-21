import React from 'react';
import { Text, AppRegistry, View } from 'react-native';

//Formatações
const Estilos = {
	principal: {
		flex: 1, // 1:1 (1 parte de um total de 1)
		backgroundColor: 'cornflowerblue'
	},

	topo: {
		flex: 2, //2:11
		backgroundColor: 'brown'
	},

	conteudo: {
		flex: 8, //8:11
		backgroundColor: 'yellowgreen'
	},

	rodape: {
		flex: 1, //1:11
		backgroundColor: 'orangered'
	}
};

//Criar componente
const App = () => {

	const { principal, topo, conteudo, rodape } = Estilos;

	return (
		<View style={ principal }>
			<Text style={ topo }>Topo</Text>
			<Text style={ conteudo }>Conteúdo</Text>
			<Text style={ rodape }>Rodapé</Text>
		</View>
	);
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('app2', () => App);
