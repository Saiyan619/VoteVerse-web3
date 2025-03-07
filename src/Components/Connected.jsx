import React from 'react'

const Connected = ({ account, candidates, number, remainingTime, handleInputChange, vote, CanVote }) => {
  console.log(CanVote)
  return (
       <div className="flex items-center justify-center h-screen flex-col">
      <div className="flex flex-col items-center">
        <h1>Welcome to the decentralized voting application</h1>
          You are connected to MetaMask

              <p>Metamask Account: {account} </p>
      </div>

      {CanVote ? 
               <div>you have already voted</div>
        :
        (  <div>
          <span>{remainingTime}</span>
          <input value={number} type="number" className='input' placeholder='type in the index you wanna vote for' onChange={handleInputChange} />
          <button onClick={vote} className='btn'>Vote</button>
        </div>)
     }

      <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Index</th>
            <th scope="col" className="px-6 py-3">Candidate Name</th>
            <th scope="col" className="px-6 py-3">Vote Count</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => (
            <tr
              key={candidate.index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
            >
              <td className="px-6 py-4">{candidate.index}</td>
              <td className="px-6 py-4">{candidate.name}</td>
              <td className="px-6 py-4">{candidate.voteCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Connected
