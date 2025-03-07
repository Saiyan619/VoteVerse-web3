import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const Hero = () => {

    const features = [
        {
          icon: "🔐",
          title: "Secure Voting",
          description: "Cast votes with confidence, knowing your voice is securely recorded on the blockchain."
        },
        {
          icon: "🌐",
          title: "Transparent Process",
          description: "All proposals and votes are visible to everyone, ensuring complete transparency."
        },
        {
          icon: "⚡",
          title: "Fast Execution",
          description: "Once approved, proposals can be automatically executed through smart contracts."
        }
    ];
    
  return (
    <div className="min-h-screen flex flex-col justify-center pt-20">
      <div className="">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-5">
              Decentralized Governance
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
          >
            Your Voice, Your Vote,<br />Your <span className="text-vote-blue-500">Vision</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            VoteVerse is a decentralized governance platform that empowers communities to make decisions together through transparent voting.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link to="/proposal">
              <button className="btn text-white rounded-full px-8 py-6 bg-blue-500 hover:bg-blue-600 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all w-full sm:w-auto">
                View Proposal
              </button>
            </Link>
            <a href="#features">
              <button className="btn rounded-full px-8 py-6 border-2 border-vote-blue-200 hover:bg-vote-blue-50 hover:border-vote-blue-300 transition-all w-full sm:w-auto">
                Learn More
              </button>
            </a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 mx-auto max-w-5xl"
        >
          <div className="glass rounded-2xl shadow-xl p-1 border border-white/20 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2832&auto=format&fit=crop"
              alt="Decentralized Voting" 
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
        </motion.div>
      </div>
      
      <div id="features" className="container-custom py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 border border-white/20"
            >
              <div className="w-12 h-12 rounded-full bg-vote-blue-100 flex items-center justify-center mb-4">
                <span className="text-vote-blue-600 text-xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};



export default Hero;