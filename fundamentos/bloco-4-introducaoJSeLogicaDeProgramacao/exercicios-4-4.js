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