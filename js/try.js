//var teste = [];
function get_option(blocos) {
    var select = document.getElementById(blocos);

    //Buscando a opção do select
    return select.options[select.selectedIndex].value;
}


function creat(selecao,texto)
{
    var bloco = get_option(selecao);
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
    //write_reclamation(nome,bloco, key, reclamacao);
}

function write_reclamation(nome,bloco,key,reclamacao){
	var bloco_selecionado = get_option(bloco);
	var conteudo = readFile(bloco) || [];

//	teste = conteudo;	
	var resultado = '<table>' +
					  '<tr>' + 
					    '<th>Nome</th>' +
					    '<th>Matricula</th> ' +
					    '<th>Reclamação</th>' +
					  '</tr>';
   // console.log(resultado);
	conteudo.forEach(function (item){
		resultado += '<tr>' + 
    					'<td>${item.nome}</td>' +
    					'<td>${item.key}</td>' +
    					'<td>${item.reclamacao}</td>' +
  					'</tr>';
	});
	resultado += '</table>';
	
	document.getElementById("result").innerHTML = resultado;
}


 function criar_reclamacao(tipo, bloco, texto){
    var bloco_selecionado = get_option(bloco);
    var reclamacao = document.getElementById(texto).value;

    var key = $(bloco_selecionado);
    var conteudo = readFile(key) || [];

    var nova_reclamacao = {
        nome: nome,
//        cpf: cpf,
        matricula: matricula,
        bloco: bloco_selecionado,
//        tipo: tipo_selecionado,
        reclamacao: reclamacao
    }; 
 }