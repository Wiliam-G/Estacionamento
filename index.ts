interface Veiculo {
    nome: string;
    placa: string;
    entrada: Date | string;
}

(function(){
    const $ = (querry: string): HTMLInputElement | null => document.querySelector(querry);

    function calculaTempo(mil: number){
        const min = Math.floor(mil/60000);
        const sec = Math.floor(mil%60000)/1000;

        return `${min}m e ${sec}s`;
    }
    function patio(){

        function ler(): Veiculo[]{
            return localStorage.patio ? JSON.parse(localStorage.patio) : [];
        }

        function salvar(veiculos: Veiculo[]){
            localStorage.setItem('patio', JSON.stringify(veiculos));
        }

        function adicionar(Veiculo: Veiculo, salva?: boolean){
            const row = document.createElement("tr");

            row.innerHTML = `
            <td>${Veiculo.nome}</td>
            <td>${Veiculo.placa}</td>
            <td>${Veiculo.entrada}</td>
            <td>
                <button class="delete">X</button>
            </td>          
            `;

            row.querySelector(".delete")?.addEventListener("click", function(){
                remover(this.dataset.placa)
            })

            $("#patio")?.appendChild(row);

            if(salva) salvar([...ler(), Veiculo]);
        }
        function remover(placa: string){
            const {entrada, nome} = ler().find(
                (veiculo) => veiculo.placa === placa);

            const tempo = calculaTempo(new Date().getTime() - new Date(entrada).getTime());

            if(!confirm(`O veículo ${nome} permaneceu por ${tempo}. Deseja retirar?`)
            )
                return;
            salvar(ler().filter((veiculo) => veiculo.placa != placa));
            render();
        }
        function render(){
            $("#patio") !.innerHTML = "";
            const patio = ler();
            if(patio.length){
                patio.forEach((veiculos) => adicionar(veiculos));
            }
        }

        return {ler, adicionar, remover, render};
    }

    patio().render();

    $("#cadastrar")?.addEventListener("click", () => {
        const nome = $("#nome")?.value;
        const placa = $("#placa")?.value;

        if(!nome || !placa){
            alert("Os campos nome e placa são obrigatórios.");
            return;
        }

        patio().adicionar({nome, placa, entrada: new Date().toISOString()}, true)
    });
})();

