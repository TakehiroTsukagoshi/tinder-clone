import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card';
import "./TinderCards.css"
import db from "./firebase"
import { Unsubscribe } from '@material-ui/icons';

function TinderCards() {

  const [people, setPeople] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection("people").onSnapshot((snapshot) => {
      setPeople(snapshot.docs.map((doc) => doc.data()))
    })
    return () => {
      unsubscribe();
    }
  }, [])

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard className="swipe" key={person.name} preventSwipe={["up", "down"]}>
            <div style={{ backgroundImage: `url(${person.url})`}} className="card">
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  )
}

export default TinderCards
