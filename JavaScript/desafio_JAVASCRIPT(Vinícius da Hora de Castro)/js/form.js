
//class contato

class contato {
    constructor(nome, email, telefone, tipoDeContato, mensagem) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.tipoDeContato = tipoDeContato;
        this.mensagem = mensagem;
    }
}

function Post(form) { 

  let data = new contato(form.elements.namedItem("NOME DE USUÁRIO*").value,
            form.elements.namedItem("E-MAIL*").value, 
            form.elements.namedItem("TELEFONE*").value, 
            form.elements.namedItem("TIPO DE CONTATO").value, 
            form.elements.namedItem("MENSAGEM*").value);
    Enviar(data);
    return false;
}

function Enviar(data) {

    console.log(data);

    if (data.nome != "") {
        alert('Obrigado sr(a) ' + data.nome + ' os seus dados foram encaminhados com sucesso');
    }

}