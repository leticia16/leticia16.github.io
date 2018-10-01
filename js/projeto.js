//function get_option(blocos){
//	var select = document.getElementById(blocos);
//    console.log(select);
//	//Buscando a opção do select
//	return select.options[select.selectedIndex].value;
//}

function creat(selecao,texto)
{
//    var bloco = get_option(selecao);
//    console.log(selecao);
    var select = document.getElementById(selecao);
    var bloco = select.options[select.selectedIndex].value;
    console.log(bloco);
    var reclamacao = document.getElementById(texto).value;
    
    var key = document.forms[0].matricula.value;
    var nome = document.forms[0].nome.value;
    var conteudo = readFile(key) || [];
    
    var nova_reclamacao = {
        nome: nome,
        matricula: key,
        bloco : bloco,
        reclamacao: reclamacao
    };
    
    console.log(nova_reclamacao);

    conteudo.push(nova_reclamacao);

    writeFile(key, conteudo);
    
    //delete window.conteudo;

    alert("Reclamação enviada!");
    write_reclamation(nome,bloco, key, reclamacao,selecao);
}