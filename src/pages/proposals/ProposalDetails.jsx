import React from 'react'
import { useEffect } from 'react';
import moment from 'moment';


const ProposalDetails = ({getCandidates, candidates, CanVote, voteYes, voteNo, getRemainingTime, remainingTime }) => {
    console.log(CanVote)
    console.log(remainingTime)
    console.log(candidates)

    useEffect(() => {
        getCandidates()
        getRemainingTime()
    }, [])
    

    const seconds = remainingTime;
const timeLeft = moment.duration(seconds, 'seconds').humanize();

    console.log(`${timeLeft} left`);
    
  return (
      <div className='p-3 lg:p-15'>
          <div className='flex items-center justify-between'>
              <div><div className="badge badge-soft badge-success"><div aria-label="success" className="status status-success"></div>Active</div></div>
              <div><span>{timeLeft} left</span></div>
          </div>

          <div className='mt-6'>
              <h1 className='text-2xl font-bold mb-4'>Deploy Smart Contract to Abritrum Mainnet</h1>
              <span className=''>Created By: Olaniyi Arokoyu</span>
              <p className='mt-6 text-md mb-10'>This proposal suggests deploying our governance contracts to Arbitrum Mainnet to leverage lower gas fees and faster transaction confirmations.</p>
          </div>

          <div className='flex justify-between text-lg flex-col gap-10 md:flex-row'>
          <div>
                  <h2 className='font-bold mb-4'>Voting Results</h2>
                  
                  {candidates.map((item) => {
                      return (
                        <div key={item.index} className='flex flex-col'>
                        <div className='flex justify-between'>
                            <span className='font-bold'>{item.name}</span>
                            <span className='text-gray-400'><span className='font-bold text-black'>{item.voteCount}</span>({item.voteCount}/100)</span>
                            </div>
                        <div>
                        <progress className={item.name === "No" ? `progress progress-warning w-full md:w-96 h-4` : `progress progress-success w-full h-4`} value={item.voteCount} max="100"></progress>
                        </div>
                    </div>
                      )
                  })}
                 
              </div>
              
              {CanVote ? 
                  (<span>You have already Voted</span>)
                      :
                  (  <div>
                    <h2 className='font-bold'>Your Vote</h2>
  
                    <div className='flex flex-col gap-3'>
                        <button onClick={voteYes} className='btn btn-success text-white mt-5 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
  </svg>
                            Vote For
                        </button>
                        <button onClick={voteNo} className="btn btn-soft btn-warning rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54" />
  </svg>
                            Vote Against
                        </button>
                    </div>
                </div>)
            
        }

         </div> 
    </div>
  )
}

export default ProposalDetails