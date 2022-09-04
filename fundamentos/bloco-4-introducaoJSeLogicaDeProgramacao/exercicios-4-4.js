// object

let singer = {
    name: "Milton",
    lasteName: "Nascimento",
    nickname: "Bituca",
    age: 77,
    bestAlbuns: ["Travessia", "Clube da Esquina", "Minas"],
    borInfo: {
        city: "Rio de Janeiro",
        state: "Rio de Janeiro"
    }
};

singer["fullName"] = singer.name + " " + singer.lasteName; 

// console.table(singer)
// console.log("O cantor " + singer.fullName + "nasceu no estado do " + singer.borInfo.state);


let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };

  console.table(car);

  let diasDaSemana = {
    1: 'domingo',
    2: 'segunda',
    3: 'terça',
    4: 'quarta',
    5: 'quinta',
    6: 'sexta',
    7: 'sábado',
  };
  
//   diasDaSemana.1;  SyntaxError: Unexpected number
  console.table(diasDaSemana); // domingo

  let conta = {
    agencia: '0000',
    banco: {
      cod: '012',
      id: 4,
      nome: 'TrybeBank',
    },
  };
  
  let infoDoBanco = 'banco';
  console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
  console.log(conta[infoDoBanco]['nome']); // TrybeBank
  
  console.log(conta.agencia); // 0000
  console.log(conta['agencia']); // 0000
  
  console.log(conta.banco.cod); // 012
  console.log(conta['banco']['id']); // 4

  let usuario = {
    id: 99,
    email: 'jakeperalta@gmail.com',
    infoPessoal: {
      nome: 'Jake',
      sobrenome: 'Peralta',
      endereco: {
        rua: 'Smith Street',
        bairro: 'Brooklyn',
        cidade: 'Nova Iorque',
        estado: 'Nova Iorque',
      },
    },
  };
  
  console.log(usuario['id']); // 99
  console.log(usuario.email); // jakeperalta@gmail.com
  
  console.log(usuario.infoPessoal.endereco.rua); // Smith Street
  console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque


  let moradores = [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ];
  
  let primeiroMorador = moradores[0];
  console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
  console.log(primeiroMorador['andar']); // 10
  
  let ultimoMorador = moradores[moradores.length - 1];
  console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
  console.log(ultimoMorador.nome); // Zoey

  let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals:  {  golden: 2, 
                silver: 3 }
  };

//   console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " anos de idade")

  player["bestInTheWorld"] = [2006, 2007, 2008, 2009, 2010, 2018];
  player["fullName"] = player.name + " " + player.lastName;

//   console.table(player);
//   console.log(player);
//   console.log("A jogadora " + player.fullName + " foi eleita a melhor do mundo por 6 vezes.")
//   console.log(player.bestInTheWorld)
// console.log("A jogadora possui "+ player.medals.golden +" medalhas de ouro e " + player.medals.silver +" medalhas de prata")

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

    car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index, car[index]);
  }

  let food = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) {
  console.log(value);
};


let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (let key in names) {
    console.log("Olá " + names[key]+".");
  }

  function operations (a,b) {
    let addition = a + b;
    let subtraction = a - b;
    let multiplication = a * b;
    let division = a / b;
    let module = a % b;
    let result = addition+ "," +subtraction+ "," +multiplication+ "," +division+ ","+module+".";
    
return result;


  }


  console.log(operations(22,44));

  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log("Bem vinda, " + info.personagem);

  info['recorrente'] = 'Sim';

  console.log(info);

  for (let key in info){
    console.log(key);
  }

  for (let key in info){
    console.log(info[key]);
  }

  let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: "Sim"
  };
  
  // Bloco de Funções

  function verificaPalindrome(s){
    if ([...s].reverse().join("") === s){
        return true;
    } else {
        return false;
    }
}
console.log(verificaPalindrome("arara"));

function maiorIndex(array) {
  
  let mI = [];
    for (let index in array) {
      if (array[index] >= mI){
        mI=index;
    }
  
}
return mI;
}

console.log(maiorIndex([2, 3, 6, 7, 10, 11]));

function menorIndex(array) {
  
  let meI = [];
    for (let index in array) {
      if (array[index] <= meI){
        meI=index;
    }
  
}
return meI;
}



console.log(menorIndex([2, 4, 6, 7, 10, 0, -3]));


function maiorString (array) {

  let maior = []

  for (let i = 0; i < array.length; i += 1) {
      if (array[i].length > maior.length) {
          maior = array[i]
      }
  }
 return maior;
}
console.log(maiorString(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

