/* eslint-disable no-undef */
// eslint-disable react-hooks/exhaustive-deps
import Card from "./components/Card"
import { useEffect, useState } from "react"


const data_url = "https://gist.githubusercontent.com/knot-freshket/142c21c3e8e54ef36e33f5dc6cf54077/raw/460fa6bd2bcc3aad83afde7256f1d742811f3392/freshket-places.json"
const tag_url = "https://gist.githubusercontent.com/knot-freshket/fa49e0a5c6100d50db781f28486324d2/raw/55bc966f54423dc73384b860a305e1b67e0bfd7d/freshket-tags.json";

function App() {

  const [cardArray, setCardArray] = useState([]);

  useEffect(() => {
    async function fetchData () {
      const response = await fetch(data_url);
      const body = await response.json();
      return body; 
    }

    async function fetchTag() {
      const response = await fetch(tag_url);
      const body = await response.json();
      return body; 
    }

    async function LoadData() {
      const cardData = await fetchData();
      const tags_meta = await fetchTag();

      setCardArray(cardData.map(({ tags, ...rest }) => {
     
        const tag_names = tags ? tags.map((id) => {
          return tags_meta[id - 1];
        }) : [];
      
        return {tag_names,...rest}
      }))

    }


    LoadData()
  },[])

  return (
    <>
      <div className="grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cardArray.map((card) => <Card key={card.id} data={card}  />)} 
      </div>
    </>
  )
}

export default App
