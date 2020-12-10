const description = document.getElementById('description')
const buttons = document.getElementById('game-buttons')
var image = document.getElementById("inventoryItem");

let state = {}

function startGame() {
  state = {}
  showtekst(1)
}

function showtekst(tekstIndex) {
  const tekst = teksten.find(tekst => tekst.id === tekstIndex)
  description.innerText = tekst.text
  image.src="Images/bos.jpg"
  while (buttons.firstChild) {
    buttons.removeChild(buttons.firstChild)
  }

  tekst.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      buttons.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nexttekstId = option.nextText
  if (nexttekstId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showtekst(nexttekstId)
}

const teksten = [
  {
      id: 1,
      text: 'In deze game kom je verder door de juiste keuze te maken.',
      options: [
        {
          text: 'Start',
          nextText: 14
        }
      ]
    },
    {
    id: 14,
    text: 'Het is nacht en je bent verdwaald in een bos en staat op een splitsing welke kant kies je?',
    options: [
      {
        text: 'Ga naar links',
        setState: { sleutel: false },
        nextText: 2
      },
      {
        text: 'Ga naar rechts',
        nextText: 3
      }
    ]
  },
  {
    id: 2,
    text: 'Je komt aan bij een huis je ziet licht branden in het huis wat doe je?',
    options: [
      {
        text: 'Ga naar binnen',
        requiredState: (currentState) => currentState.sleutel,
        setState: { sleutel: true },
        nextText: 5
      },
      {
        text: 'Loop voorbij het huis',
        nextText: 10
      },
     
    ]
  },
  {
    id: 3,
    text: 'Je loopt richting een grot vlak naast de grot zie je een zwaard wat doe je?',
    options: [
      {
        text: 'Pak het zwaard',
        setState: { zwaard: true },
        nextText: 4
      },
      {
        text: 'Laat het zwaard liggen',
        nextText: 7
      },
     
    ]
  },
  {
    id: 4,
    text: 'In de grot kom je een beer tegen wat doe je?',
    options: [
      {
        text: 'Vermoord de beer',
        requiredState: (currentState) => currentState.zwaard,
        setState: { zwaard: true },
        nextText: 6
        },
        {
        text: 'Probeer langs de beer te sluipen',
        nextText: 6
      },
      {
        text: 'Loop terug de grot uit.',
        nextText: 15
        },
    ]
  },
    {
  id: 7,
  text: 'In de grot kom je oog in oog te staan met een beer dit overleef je niet.',
  options: [
    {
      requiredState: (currentState) => currentState.zwaard,
      setState: { zwaard: false },
      nextText: 5
      },
      {
      text: 'Restart',
      nextText: -1
    }
  ]
},
{
  id: 15,
  text: 'Terwijl je naar de uitgang loopt struikel je over een steentje vervolgens wordt je vermoord door de beer.',
  options: [
    {
      text: 'Game Over!',
      nextText: -1
    }
  ]
},
  {
    id: 5,
    text: 'Je bent vermoord door de beer.',
    options: [
      {
        text: 'Game Over!',
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    text: 'Het is je gelukt om door de grot heen te komen! Je ziet een kampvuur wat doe je?',
    options: [
      {
        text: 'Rust  uit bij het kampvuur',
        nextText: 8
      },
    {
        text: 'Ga verder.',
        nextText: 9
    }
    ]
  },
  { id: 9,
    text: 'Je bent oververmoeid geraakt.',
    options: [
      {
        text: 'Game Over!',
        nextText: -1
      }
    ]
  },
  { id: 8,
    text: 'Na het uitrusten kom je aan bij een dorpje. Het is je gelukt om uit het bos te komen!',
    options: [
      {
        text: 'You Win!',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'Na een paar minuten wandelen zie je een sleutel op de grond liggen.',
    options: [
      {
        text: 'Pak de sleutel en ga terug naar het huisje.',
        setState: { sleutel: true },
        nextText: 11
      },
    {
        text: 'Ga verder.',
        nextText: 13
    }
    ]
  },
  {
    id: 11,
    text: 'Na een paar minuten wandelen ben je weer bij het huisje aangekomen.',
    options: [
      {
        text: 'Ga naar binnen.',
        equiredState: (currentState) => currentState.sleutel,
        setState: { sleutel: true },
        nextText: 12
    }
    ]
  },
  { id: 12,
    text: 'In het huisje staat wat te eten en te drinken klaar, Je hebt de nacht overleefd!',
    options: [
      {
        text: 'You Win!',
        nextText: -1
      }
    ]
  },
  { id: 13,
    text: 'Je bent uitgehongerd geraakt.',
    options: [
      {
        text: 'Game Over!',
        nextText: -1
      }
    ]
  },
]

function image(){
  if(teksten== 1){
    image.src="Images/bos.jpg"
  }
}

startGame()
image()