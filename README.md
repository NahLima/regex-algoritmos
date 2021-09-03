# regex-algoritmos

## Explicando o código

O split é feito considerando-se um ou mais espaços como separador "split(/ +/ )" - repare que há um espaço antes do +).

O split retorna um array contendo as partes do pathImagem. O uso do método every, verifica se todas as partes correspondem à regex, se alguma delas não corresponder, o retorno é false. 


### métodos usados 

[split()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split)

[every()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every) -
O método every executa a função callback fornecida uma vez para cada elemento presente no array, até encontrar algum elemento em que a função retorne um valor false (valor que se torna false quando convertido para boolean). Se esse elemento é encontrado, o método every imediatamente retorna false. Caso contrário, se a função callback retornar true para todos elementos, o método retorna true.  A função callback é chamada apenas para os elementos do array original que tiverem valores atribuídos; os elementos que tiverem sido removidos ou os que nunca tiveram valores atribuídos não serão considerados.

[test()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) - O método test() executa uma busca por uma correspondência entre  uma expressão regular e uma string. Retorna true ou false.