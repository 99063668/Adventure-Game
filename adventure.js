const textElement = document.getElementById('description')
const optionButtonsElement = document.getElementById('game-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
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
        nextText: 6
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
      }
    ]
  },
    {
  id: 7,
  text: 'In de grot kom je een beer tegen wat doe je?',
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
    id: 7,
    text: 'While exploring the castle you come across a horrible monster in your path.',
    options: [
      {
        text: 'Try to run',
        nextText: 8
      },
      {
        text: 'Attack it with your sword',
        requiredState: (currentState) => currentState.sword,
        nextText: 9
      },
      {
        text: 'Hide behind your shield',
        requiredState: (currentState) => currentState.shield,
        nextText: 10
      },
      {
        text: 'Throw the blue goo at it',
        requiredState: (currentState) => currentState.blueGoo,
        nextText: 11
      }
    ]
  },
  {
    id: 8,
    text: 'Your attempts to run are in vain and the monster easily catches.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 9,
    text: 'You foolishly thought this monster could be slain with a single sword.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'The monster laughed as you hid behind your shield and ate you.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'You threw your jar of goo at the monster and it exploded. After the dust settled you saw the monster was destroyed. Seeing your victory you decide to claim this castle as your and live out the rest of your days there.',
    options: [
      {
        text: 'Congratulations. Play Again.',
        nextText: -1
      }
    ]
  }
]

startGame()



