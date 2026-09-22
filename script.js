
// =====================================
// ELEMENTOS
// =====================================

const formulario = document.getElementById("bookingForm");

const casa = document.getElementById("casa");
const barbearia = document.getElementById("barbearia");

const homeAddress = document.getElementById("homeAddress");
const endereco = document.getElementById("endereco");

const dataInput = document.getElementById("data");


// =====================================
// DATA MÍNIMA
// Não permite escolher datas passadas
// =====================================

const hoje = new Date();

const ano = hoje.getFullYear();

const mes = String(hoje.getMonth() + 1).padStart(2, "0");

const dia = String(hoje.getDate()).padStart(2, "0");

const dataAtual = `${ano}-${mes}-${dia}`;

dataInput.min = dataAtual;


// =====================================
// ESCOLHA: EM CASA
// =====================================

casa.addEventListener("change", function () {

    if (casa.checked) {

        homeAddress.classList.add("active");

        endereco.required = true;

    }

});


// =====================================
// ESCOLHA: BARBEARIA
// =====================================

barbearia.addEventListener("change", function () {

    if (barbearia.checked) {

        homeAddress.classList.remove("active");

        endereco.required = false;

        endereco.value = "";

    }

});


// =====================================
// ENVIO DO AGENDAMENTO
// =====================================

formulario.addEventListener("submit", function (event) {

    event.preventDefault();


    // Dados do formulário

    const nome =
        document.getElementById("nome").value.trim();

    const data =
        document.getElementById("data").value;

    const hora =
        document.getElementById("hora").value;

    const servico =
        document.getElementById("servico").value;

    const localSelecionado =
        document.querySelector(
            'input[name="local"]:checked'
        ).value;

    const observacao =
        document.getElementById("observacao").value.trim();


    // =================================
    // FORMATA DATA
    // =================================

    const partesData = data.split("-");

    const dataFormatada =
        `${partesData[2]}/${partesData[1]}/${partesData[0]}`;


    // =================================
    // CRIA MENSAGEM
    // =================================

    let mensagem =
        "Olá, Eduardo! 👋\n\n";

    mensagem +=
        "Gostaria de agendar um horário.\n\n";

    mensagem +=
        "👤 *Nome:* " +
        nome +
        "\n";

    mensagem +=
        "📅 *Data:* " +
        dataFormatada +
        "\n";

    mensagem +=
        "⏰ *Horário:* " +
        hora +
        "\n";

    mensagem +=
        "✂️ *Serviço:* " +
        servico +
        "\n";

    mensagem +=
        "📍 *Local:* " +
        localSelecionado +
        "\n";


    // =================================
    // ENDEREÇO CASO SEJA EM CASA
    // =================================

    if (localSelecionado === "Em casa") {

        mensagem +=
            "🏠 *Endereço:* " +
            endereco.value.trim() +
            "\n";

    }


    // =================================
    // OBSERVAÇÃO / CORTE
    // =================================

    if (observacao !== "") {

        mensagem +=
            "📝 *Detalhes do corte:* " +
            observacao +
            "\n";

    }


    mensagem +=
        "\nAguardo a confirmação do horário!";


    // =================================
    // WHATSAPP
    // =================================

    const numeroWhatsApp =
        "555182199641";


    const linkWhatsApp =
        "https://wa.me/" +
        numeroWhatsApp +
        "?text=" +
        encodeURIComponent(mensagem);


    // Abre o WhatsApp

    window.open(linkWhatsApp, "_blank");

});

