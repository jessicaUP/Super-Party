export const activeChars = [
  { id: 1, character: 'Mario', profilePic: 'https://mario.nintendo.com/static/12a46ed6612384e88499f6c8593ef61b/e30b6/mario-unstack-closed.png', mainPic: 'https://mario.nintendo.com/static/b9cc50d1fbaa5de0ddb6a22351939dcf/0d359/mario-unstack-open.png'},
  { id: 2, character: 'Luigi', profilePic: 'https://mario.nintendo.com/static/70a63717b736085b71768be7a2558da7/e30b6/luigi-unstack-closed.png', mainPic: 'https://mario.nintendo.com/static/b3c554b1a8024084dea2bdddcb58fec9/0d359/luigi-unstack-open.png' },
  { id: 4, character: 'Peach', profilePic: 'https://mario.nintendo.com/static/563e133e9adebbe3aea188f8b4f35c6d/e30b6/peach-unstack-closed.png', mainPic: 'https://mario.nintendo.com/static/6731ec87c8e4fe2ab7b191292f9df949/13fb2/peach-unstack-open.png' },
  { id: 3, character: 'Yoshi', profilePic: 'https://mario.nintendo.com/static/2208b1d42ecc7ee431fd5321c89dc178/e30b6/yoshi-unstack-closed.png', mainPic: 'https://mario.nintendo.com/static/e9972b02cf7a1af9a834526c3f4b4465/0d359/yoshi-unstack-open.png' },
  { id: 5, character: 'Rosalina', profilePic: 'https://mario.nintendo.com/static/adc750a84fd82295815837189fc509ba/e30b6/rosalina-unstack-closed.png', mainPic: 'https://mario.nintendo.com/static/577e9da07749284cda6bcfe32f649c46/0d359/rosalina-unstack-open.png' },
  { id: 9, character: 'Bowser', profilePic: 'https://mario.nintendo.com/static/d5e5d97d061a0412d4299c4b2d1570a4/e30b6/bowser-unstack-closed.png', mainPic: 'https://mario.nintendo.com/static/233682a28cdb7b3cc0232a81a0b6c4e7/0d359/bowser-unstack-open.png' },
  { id: 10, character: 'Bowser Jr.', profilePic: 'https://mario.nintendo.com/static/d665e673bf216efdf126ebee4635aab5/e30b6/bowser-jr-unstack-closed.png', mainPic: 'https://mario.nintendo.com/static/9e6ea4d476f152c6584a061f17d7a86b/0d359/bowser-jr-unstack-open.png'},
  { id: 6, character: 'Wario', profilePic: 'https://mario.nintendo.com/static/1aa760ce66266be8f8c1b0e7a4005d78/e30b6/wario-unstack-closed.png', mainPic: 'https://mario.nintendo.com/static/c64da95b403bfbcc9aeccdf12a8a9167/0d359/wario-unstack-open.png'},
  { id: 13, character: 'Donkey Kong', profilePic: 'https://mario.nintendo.com/static/de1bbfea95fc50e5364f5969051a631b/e30b6/donkey-kong-unstack-closed.png', mainPic: 'https://mario.nintendo.com/static/33f1fca91af37f22c0dd21e047a731ec/0d359/donkey-kong-unstack-open.png'},
  { id: 14, character: 'Diddy Kong', profilePic: 'https://mario.nintendo.com/static/b1eb9a1255bcef9b38a71079460eb9c6/e30b6/diddy-kong-unstack-closed.png', mainPic: 'https://mario.nintendo.com/static/8cc39c79e546bc39dd9378ec77c44912/0d359/diddy-kong-unstack-open.png'},
  { id: 12, character: 'Toad', profilePic: 'https://mario.nintendo.com/static/d8726fcdf6808063305a2f23a0861675/e30b6/toad-unstack-closed.png', mainPic: 'https://mario.nintendo.com/static/845f5c338c0967b7915090a911066af8/0d359/toad-unstack-open.png'},
  { id: 8, character: 'Daisy', profilePic: 'https://mario.nintendo.com/static/6d1a7f8a5e73b6ac5b152df1ea3e17f0/e30b6/daisy-unstack-closed.png', mainPic: 'https://mario.nintendo.com/static/647787be0ed352c8252703a25730e99e/0d359/daisy-unstack-open.png'},
  { id: 7, character: 'Waluigi', profilePic: 'https://mario.nintendo.com/static/75d6ad23ee9360e4dfbee56c8c882e5e/e30b6/waluigi-unstack-closed.png', mainPic: 'https://mario.nintendo.com/static/d468a32c7ab971cce7b3e89ae48560a0/0d359/waluigi-unstack-open.png'},
  { id: 11, character: 'Boo', profilePic: 'https://mario.nintendo.com/static/4c824a88f2cd388c923ee0aeb1777cea/e30b6/boo-unstack-closed.png', mainPic: 'https://mario.nintendo.com/static/d58b0ccade70be44e161a3c80ffb9c56/0d359/boo-unstack-open.png' }
];

export const characterList = ['Mario', 'Luigi', 'Yoshi', 'Peach', 'Waluigi', 'Wario', 'Bowser', 'Bowser Jr.', 'Boo', 'Toad', 'Daisy', 'Rosalina', 'Donkey Kong', 'Diddy Kong']

const createActiveObject = () => {
  const characters = {};

  for (let info of activeChars) {
    const { profilePic, mainPic, character, id } = info;
    characters[character] = {
      id: id,
      name: character,
      profile: profilePic,
      main: mainPic,
      jobs: new Set(),
    };
  }


  return characters;
} 


export const organizeInformation = (characters) => {
  const newAll = createActiveObject();

  for (let info of characters) {

    if (info.character in newAll) {
      const { character, amiiboSeries } = info;
      if (!newAll[character].name) newAll[character].name = character;
      if (!newAll[character].jobs.has(amiiboSeries)) newAll[character].jobs.add(amiiboSeries);
    }

  }

  const collection = {};

  for (let character in newAll) {
    const { jobs, id } = newAll[character];
    newAll[character].jobs = Array.from(jobs);
    collection[id] = newAll[character]
  }
  
  return collection;

}

