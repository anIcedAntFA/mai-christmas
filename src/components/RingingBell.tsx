import { motion } from 'framer-motion';

function RingingBell() {
  return (
    <svg className='bell' viewBox='-100 -100 200 200'>
      <g stroke='#001514' strokeWidth='2'>
        <motion.circle
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 1.2,
          }}
          cx='0'
          cy='-45'
          r='7'
          fill='#4F6D7A'
        />
        <motion.circle
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 1.4,
          }}
          className='bell-tongue'
          cx='0'
          cy='50'
          r='10'
          fill='#F79257'
        />
        <motion.path
          initial={{ opacity: 0, scale: 0, y: '-40px' }}
          animate={{ opacity: 1, scale: 1, y: '0px' }}
          transition={{
            duration: 0.4,
            delay: 1.3,
          }}
          d='
        M -50 40
        L -50 50
        L 50 50
        L 50 40
        Q 40 40 40 10
        C 40 -60 -40 -60 -40 10
        Q -40 40 -50 40'
          fill='#FDEA96'
        />
      </g>
    </svg>
  );
}

export default RingingBell;
