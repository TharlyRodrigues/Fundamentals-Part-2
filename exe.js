/*DESAFIO #1
De volta às duas equipes de ginástica, os Golfinhos e os Coalas! Há uma nova disciplina de ginástica, que funciona de forma diferente.

Cada equipe compete 3 vezes e então a média das 3 pontuações é calculada (portanto, uma pontuação média por equipe).

Uma equipe só vence se tiver pelo menos o dobro da pontuação média da outra equipe. Caso contrário, nenhuma equipe vence!



Suas tarefas:
Crie uma função de seta calcAverage para calcular a média de 3 pontuações. Esta função deve ter três parâmetros e retornar um único número (a pontuação média).
Crie duas novas variáveis ​​- scoreDolphin se scoreKoala se atribua a elas o valor retornado da calcAverage função (você precisará chamar esta função e passar pontuações como argumentos).
Crie uma função checkWinner que tome como parâmetros ( avgDolphin se avgKoalas) a pontuação média de cada equipe e depois registre o vencedor no console, junto com os pontos de vitória, conforme regra acima. Exemplo: Koalas win (30 vs. 13)(use avgDolphins e avgKoalas em vez de valores codificados).
Use a checkWinner função para determinar o vencedor para DATA 1 e DATA 2 .
Ignore os empates desta vez. Em vez disso, faça login No team wins...no console se não houver vencedor.

DADOS DE TESTE 1 : Golfinhos pontuaram 44, 23 e 71. Coalas pontuaram 65, 54 e 49.

DADOS DE TESTE 2 : Golfinhos pontuaram 85, 54 e 41. Coalas pontuaram 23, 34 e 27.

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`dolphins win 🏆 (${avgDolphins} vs ${avgKoalas}) `);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs ${avgDolphins} )`);
  } else {
    console.log("no team wins....");
  }
};

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 115);

// test 2

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

CHALLENGE #2
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.



👋 OPTIONAL: You can watch my solution in video format in the next lecture*/
