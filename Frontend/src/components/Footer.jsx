import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="py-12 bg-transparent border-t border-gray-200/50 dark:border-gray-800/30 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center gap-6">
        <div className="text-gray-500 dark:text-gray-400 text-sm font-medium flex flex-wrap justify-center gap-2 text-center">
          <span>© {new Date().getFullYear()}</span>
          <span>Ashwin Mukati. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
