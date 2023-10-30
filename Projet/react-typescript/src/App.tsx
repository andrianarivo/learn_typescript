import {useState, useRef, useEffect} from 'react'
import Card from "./component/Card.tsx"

function App() {

  const [cardsData] = useState([
    {
      title: "Van Gogh",
      content: "La Nuit Etoilée",
      id: 2
    },
    {
      title: "Picasso",
      content: "Guernica",
      id: 3
    },
    {
      title: "Munch",
      content: "Le Cri",
      id: 4
    },
    {
      title: "Dali",
      content: "La Persistance de la Mémoire",
      id: 5
    },
    {
      title: "Matisse",
      content: "La Danse",
      id: 6
    },
    {
      title: "Klimt",
      content: "Le Baiser",
      id: 7
    },
    {
      title: "Monet",
      content: "Les Nymphéas",
      id: 8
    },
    {
      title: "Renoir",
      content: "Le Déjeuner des Canotiers",
      id: 9
    },
    {
      title: "Cézanne",
      content: "Les Joueurs de Cartes",
      id: 10
    },
    {
      title: "Vermeer",
      content: "La Jeune Fille à la Perle",
      id: 11
    },
    {
      title: "Rembrandt",
      content: "La Ronde de Nuit",
      id: 12
    },
    {
      title: "Bosch",
      content: "Le Jardin des Délices",
      id: 13
    },
    {
      title: "Bruegel",
      content: "La Chute des Anges Rebelles",
      id: 14
    },
    {
      title: "Velázquez",
      content: "Les Ménines",
      id: 15
    },
    {
      title: "Goya",
      content: "Le Tres de Mayo",
      id: 16
    },
  ])

  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    console.log(buttonRef)

    const handleResize = (e: Event) => {
      console.log('Resized', e)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
      <>
        {cardsData.map(
            ({title, content, id}) =>
                <Card title={title} content={content} key={id}/>)
        }
        <button ref={buttonRef}>Submit</button>
      </>
  )
}

export default App
