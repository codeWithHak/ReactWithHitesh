import React from 'react'

function Card({url="https://static.cricketaddictor.com/wp-content/uploads/2023/08/Naseem-Shah.png?q=80",name="Naseem Shah",desc="star boy of ptc etc tec",role="Bowler"}) {
    return (
        <div className="relative h-[400px] w-[300px] rounded-md">
          
          <img
            src={url}
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">{name}</h1>
            <p className="mt-2 text-sm text-gray-300">
              {desc}
            </p>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white bg-black">
              {role} &rarr;
            </button>
          </div>
        </div>
      )
}

export default Card