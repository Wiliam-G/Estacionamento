(function () {
    var _a;
    const $ = (querry) => document.querySelector(querry);
    function calculaTempo(mil) {
        const min = Math.floor(mil / 60000);
        const sec = Math.floor(mil % 60000) / 1000;
        return `${min}m e ${sec}s`;
    }
    function patio() {
        function ler() {
            return localStorage.patio ? JSON.parse(localStorage.patio) : [];
        }
        function salvar(veiculos) {
            localStorage.setItem('patio', JSON.stringify(veiculos));
        }
        function adicionar(Veiculo, salva) {
            var _a, _b;
            const row = document.createElement("tr");
            row.innerHTML = `
            <td>${Veiculo.nome}</td>
            <td>${Veiculo.placa}</td>
            <td>${Veiculo.entrada}</td>
            <td>
                <button class="delete">X</button>
            </td>          
            `;
            (_a = row.querySelector(".delete")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
                remover(this.dataset.placa);
            });
            (_b = $("#patio")) === null || _b === void 0 ? void 0 : _b.appendChild(row);
            if (salva)
                salvar([...ler(), Veiculo]);
        }
        function remover(placa) {
            const { entrada, nome } = ler().find((veiculo) => veiculo.placa === placa);
            const tempo = calculaTempo(new Date().getTime() - new Date(entrada).getTime());
            if (!confirm(`O veículo ${nome} permaneceu por ${tempo}. Deseja retirar?`))
                return;
            salvar(ler().filter((veiculo) => veiculo.placa != placa));
            render();
        }
        function render() {
            $("#patio").innerHTML = "";
            const patio = ler();
            if (patio.length) {
                patio.forEach((veiculos) => adicionar(veiculos));
            }
        }
        return { ler, adicionar, remover, render };
    }
    patio().render();
    (_a = $("#cadastrar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        var _a, _b;
        const nome = (_a = $("#nome")) === null || _a === void 0 ? void 0 : _a.value;
        const placa = (_b = $("#placa")) === null || _b === void 0 ? void 0 : _b.value;
        if (!nome || !placa) {
            alert("Os campos nome e placa são obrigatórios.");
            return;
        }
        patio().adicionar({ nome, placa, entrada: new Date().toISOString() }, true);
    });
})();
