#include <iostream>
#include <string>
#include <cstdlib>

using std::cout;
using std::cin;
using std::string;

int main() {
	float precoInicial = 0.0;
	float precoPorHora = 0.0;

	cout << "Seja bem vindo ao sistema de estacionamento!\n" << "Digite o preço inicial: ";
	cin >> precoInicial;

	cout << "Agora digite o preço por hora: ";
	cin >> precoPorHora;

	int opcao;
	bool exibirMenu = true;

	while (exibirMenu == true) {
		cout << "Digite a Opção: \n";
		cout << "1 - Adicionar veículo\n";
		cout << "2 - Remover veículo\n";
		cout << "3 - Listar veículos\n";
		cout << "4 - Encerrar\n";
		cin >> opcao;
		system("cls"); //limpa o terminal

		switch (opcao)
		{
		case 1:
			// chama o método adicionarVeiculo;
			break;
		case 2:
			//chama o método removerVeiculo;
			break;
		case 3:
			//chama o método listarVeiculos;
			break;
		case 4: 
			exibirMenu = false;
			break;
		default:
			cout << "Opção inválida, por favor escolha uma das opções disponíveis!";
			break;
		}
		system("pause");
	}
	cout << "O programa se encerrou!\n";
}