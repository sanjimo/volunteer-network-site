import React, {useState, useEffect} from 'react';
import DisplayEvents from '../DisplayEvents/DisplayEvents';

const Events = () => {
    const [events, setEvents]=useState([]);

    useEffect(() => {
        fetch("https://radiant-thicket-62526.herokuapp.com/events")
          .then(res=>res.json())
          .then(data=>{
            setEvents(data.events);
          })

    }, []);
    return (
        <div>
            <div className="">
                {
                    events.map(event=><DisplayEvents
                        key={event._id}
                        event={event}
                    >
                    </DisplayEvents>)
                }
            </div>
        </div>
    );
};

export default Events;