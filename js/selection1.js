function write_reclamation(nome,bloco,key,reclamacao,selecao){
    
    var select = document.getElementById(selecao);
    var bloco_selecionado = select.options[select.selectedIndex].value;
    
//	var bloco_selecionado = get_option(bloco);
    var keys = Object.keys(localStorage);
    var i = keys.length;
    var resultado = '<table class="tabela">' +
                    '<tr>'+
                        '<th class="titulo">Registro de Reclamações</th>'+
                    '</tr>'+
					  '<tr>' + 
					    '<th class="nome">Nome</th>' +
					    '<th class="key">Matricula</th> ' +
					    '<th class="texto">Reclamação</th>' +
                        '<th class="texto">Bloco</th>' +
					  '</tr>';
    while(i > 0) {
        i--;
	   var conteudo = readFile(keys[i]) || [];
     //   alert(keys[i]); 
        
        conteudo.forEach(function (item){
		resultado += '<tr>' + 
    				    `<td>${item.nome}</td>` +
    					`<td>${item.matricula}</td>` +
    					`<td>${item.reclamacao}</td>`+
                        `<td>${item.bloco}</td>`+
  					'</tr>';
	   });
    }
    
    resultado += '</table>';
	document.getElementById("result").innerHTML = resultado;
}