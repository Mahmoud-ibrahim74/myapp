import React from 'react'
import Card from "./Card";
import Alert from "./Alert"
const Home = () => {
    const cards = [
        { title: "The Shawshank Redemption" },
        { title: "The Godfather" },
        { title: "The Dark Knight" },
        { title: "Pulp Fiction" },
        { title: "The Lord of the Rings: The Return of the King" }  ,
        { title: "Inception" },
        { title: "Schindler's List" },
        { title: "Forrest Gump" },
        { title: "The Matrix" },
      ]
      const DisplayAlert = () => {
        alert("This Films is");
      }
  return (
    <div className="Container">{
        cards.length >= 1 ? (
          cards.map((e) => {
            return (
              <Card cardTitle={e.title} click={DisplayAlert} />
            )
          })) : <Alert />

      }</div>
  )
}

export default Home