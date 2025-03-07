import React from 'react'

const Footer = () => {
  return (
      <div>
          <footer className="container-custom py-10 mt-20 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <span className="font-semibold text-lg">VoteVerse</span>
          </div>
          
          <div className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} VoteVerse. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer