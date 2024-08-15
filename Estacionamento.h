#include <iostream>
using std::cout;
using std::endl;

#include <string>
#include <vector>
using std::string;
using std::vector;

class Estacionamento {

private: 
		float precoInicial, precoPorHora;
		vector<string> veiculos;

public:
	//construtor
	Estacionamento(float preco, float precoHora) {
		setPrecoInicial(preco);
		setPrecoPorHora(precoHora);
	}
	//fim do construtor

	void setPrecoInicial(float preco) {
		precoInicial = preco;
	}

	float getPrecoInicial() {
		return precoInicial;
	}

	void setPrecoPorHora(float precoHora) {
		precoPorHora = precoHora;
	}

	float getPrecoPorHora() {
		return precoPorHora;
	}

	void setVeiculos(string placa) {
		veiculos.push_back(placa);
	}

	void adicionarveiculo() {
		string placa;
		cout << "Por favor, informe a placa do véiculo:" << endl;
		cin >> placa;
		setVeiculos(placa);
	}

	//TODO implementar o método removerVeiculo
	//void removerVeiculo() {
	//	string placa;
	//	cout << "Por favor, informe a placa do veiculo:" << endl;
	//	cin >> placa;
	//	
	//}

	int listarVeiculos() {
		cout << "Os veiculos estacionados sao:" << endl;
		for (const string veiculo : veiculos) {
			cout << veiculo << endl;
		}
		return 0;
	}

};