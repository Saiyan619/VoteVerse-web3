import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar'
import Hero from './home/Hero'
import Footer from '../../Components/Footer'
import ProposalDetails from './ProposalDetails'
import { motion } from 'motion/react';
import { useAppContext } from '../../utils/AppContext'


const Proposal = () => {
    const { candidates, getCandidates, CanVote, voteYes, voteNo, getRemainingTime, remainingTime } = useAppContext()

    useEffect(() => {
        getCandidates(),
        getRemainingTime()
    }, [])
    

  return (
      <div className='bg-gray-50'>
          <Navbar />
         
          <div className='p-3 md:p-15 lg:p-20'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} className='mb-5 text-gray-600 hover:text-black cursor-pointer'>
                <span className=''>&#8592; Go back Home</span>
              </motion.div>
              
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} className='bg-white p-5 rounded-md shadow-xs'>
          <ProposalDetails getCandidates={getCandidates} remainingTime={remainingTime} getRemainingTime={getRemainingTime} voteNo={voteNo} voteYes={voteYes} CanVote={CanVote} candidates={candidates} />
          </motion.div>
          </div>
        
          <Footer />
    </div>
  )
}

export default Proposal