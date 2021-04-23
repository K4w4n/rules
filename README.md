# *Rules*
## Oque é?
É uma classe para ser usada em qualquer projeto em que algum dado precisa ser validado.
## Como usar?
Após importar o arquivo, crie um novo objeto usando a classe "rule" e atribua seu valor a uma variavel, constante, atributo ou array:

````
const regraIdade = new rule();
````
Use o metodo validateData para validar os dados informados:
````
regraIdade.validateData(15)//true
````
Caso os dados estejam corretos será retornado true, caso o contrario será retornado false.

Por padrão a validação sempre retorna true, para adicionar novas regras de validação utilize o metodo addRule:
````
regraIdade.addRule(function(data){return data>=18});
````
Esse metodo recebe uma função que posteriormente é usada para validar o dado.
Se testar novamente terá o seguinte resultado:
````
regraIdade.validateData(15)//false
````
É possivel adicionar mais de uma regra de validação para o dado:
````
regraIdade.addRule(function(data){return data<=35})
````
Assim só serão validados os dados que estejam entre 18 e 35, observe os resultados dessa modificação:
````
regraIdade.validateData(15)//false

regraIdade.validateData(18)//true

regraIdade.validateData(35)//true

regraIdade.validateData(36)//false

regraIdade.validateData(40)//false
````
### Remover regra de validação
São duas as formas de remover as regras de validação, a primeira é usando o metodo removeRule:
````
regraIdade.removeRule(yourFunction)
````
O exemplo acima pega a fução passada e remove das regras internas.
O segundo modo é através do metodo removeRuleNumber:
````
regraIdade.removeRuleNumber(1)
````
O metodo acima remove a segunda regra adicionada (a contagem é feita incluindo o 0).

## Exemplos de uso:

### Nome com 5 letras, com a primeira letra sendo igual a 'a':
````
const validaNome = new rule();

//Definindo regra dos nomes com 5 letras:
validaNome.addRule(function(data){return data.length == 5});

//Definindo regra da primeira letra a:
validaNome.addRule(function(data){return data[0] == 'a'});

//Testando resultado:
validaNome.validateData('kawan')//false
validaNome.validateData('araujo')//false
validaNome.validateData('anita')//true
````
### Objeto com atributo x multiplo de 10, y = 0 e texto não nulo.  
````
const validaObj = new rule();

//Definindo regra de x multiplo de 10
validaObj.addRule(function(data){return data.x % 10 == 0 });

//Definindo regra de y igual a 0:
validaObj.addRule(function(data){return data.y == 0 });

//Definindo regra de texto não nulo:
validaObj.addRule(function(data){return !!data.texto});

//Testando resultado:
validaObj.validateData({x:60, y:0, texto:'Loren'})//true

validaObj.validateData({x:15, y:0, texto:'Loren'})//false
````