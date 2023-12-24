import { motion } from 'framer-motion';

function ChristmasTree() {
  return (
    <motion.svg viewBox='-100 -200 200 400' className='relative'>
      <motion.rect
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          ease: 'easeInOut',
        }}
        x='-20'
        y='120'
        width='40'
        height='40'
        fill='#78350f'
      />
      <motion.polygon
        points='0,0 80,120 -80,120'
        fill='#234236'
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          delay: 0.2,
        }}
        className='leaf1'
      />
      <motion.polygon
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          delay: 0.3,
        }}
        points='0,-40 60,60 -60,60'
        fill='#0C5C4C'
        className='leaf2'
      />
      <motion.polygon
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          delay: 0.4,
        }}
        points='0,-80 40,0 -40,0'
        fill='#38755B'
        className='leaf3'
      />
    </motion.svg>
  );
}

export default ChristmasTree;
