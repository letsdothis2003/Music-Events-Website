import React, { useState } from 'react';

const concertsData = [
    {
        month: "January",
        venue: "Madison Square Garden",
        artist: "Billy Joel",
        event: "Live At The Garden",
        location: "Manhattan",
        products: [
            { id: 1, type: "CD", price: 25, image: "/images/billy-joel-cd.png" },
            { id: 2, type: "T-Shirt", price: 45, image: "/images/billy-joel-tshirt.png" },
            { id: 3, type: "Signed Poster", price: 100, image: "/images/billy-joel-poster.png" },
        ],
    },
    {
        month: "February",
        venue: "UBS Arena",
        artist: "Kanye West",
        event: "VULTURES LISTENING PARTY",
        location: "Queens",
        products: [
            { id: 4, type: "CD", price: 20, image: "/images/vultures-kanye-cd.png" },
            { id: 5, type: "T-Shirt", price: 30, image: "/images/vultures-kanye-tshirt.png" },
            { id: 6, type: "Signed Poster", price: 120, image: "/images/vultures-kanye-poster.png" },
        ],
    },
    {
        month: "March",
        venue: "UBS Arena",
        artist: "Drake and 21 Savage",
        event: "It's All A Blur Tour",
        location: "Queens",
        products: [
            { id: 7, type: "CD", price: 25, image: "/images/drake-cd.png" },
            { id: 8, type: "T-Shirt", price: 40, image: "/images/drake-tshirt.png" },
            { id: 9, type: "Signed Poster", price: 150, image: "/images/drake-poster.png" },
        ],
    },
];

const LocationCard = ({ location, concerts }) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div 
            className={`panel ${isActive ? 'active' : ''}`} 
            onClick={handleClick}
            style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '20px',
                marginBottom: '20px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backgroundColor: isActive ? '#f0f0f0' : '#fff',
            }}
        >
            <h2>{location}</h2>
            {isActive && (
                <div>
                    <h3>Concerts and Festival Locations:</h3>
                    {concerts.map((concert, index) => (
                        <div key={index}>
                            <h4>{concert.event} - {concert.artist}</h4>
                            <p>Venue: {concert.venue}</p>
                            <p>Month: {concert.month}</p>
                            <div>
                                {concert.products.map(product => (
                                    <div key={product.id}>
                                        <img src={product.image} alt={product.type} style={{ width: '50px', height: '50px' }} />
                                        <p>{product.type} - ${product.price}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const Locations = () => {
    const locations = ['Manhattan', 'Queens']; 
    const groupedConcerts = locations.reduce((acc, location) => {
        acc[location] = concertsData.filter(concert => concert.location === location);
        return acc;
    }, {});

    return (
        <div>
            {locations.map((location, index) => (
                <LocationCard 
                    key={index} 
                    location={location} 
                    concerts={groupedConcerts[location]} 
                />
            ))}
        </div>
    );
};

export default Locations;


