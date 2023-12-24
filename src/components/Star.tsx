import { motion } from 'framer-motion';

function Star() {
  return (
    <svg viewBox='-100 -100 200 200' className='star'>
      <motion.g
        initial={{ opacity: 0, scale: 0, rotate: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: '360deg' }}
        transition={{
          duration: 0.4,
          delay: 0.6,
          rotate: { type: 'spring', stiffness: 400, damping: 8 },
        }}
        transform='translate(0 5)'
      >
        <g>
          <polygon points='0,0 36,-50 0,-100' fill='#fffa86' />
          <polygon points='0,0 -36,-50 0,-100' fill='#ffa371' />
        </g>
        <g transform='rotate(72)'>
          <polygon points='0,0 36,-50 0,-100' fill=' 	#fffa86' />
          <polygon points='0,0 -36,-50 0,-100' fill='#ffa371' />
        </g>
        <g transform='rotate(-72)'>
          <polygon points='0,0 36,-50 0,-100' fill=' 	#fffa86' />
          <polygon points='0,0 -36,-50 0,-100' fill='#ffa371' />
        </g>
        <g transform='rotate(144)'>
          <polygon points='0,0 36,-50 0,-100' fill=' 	#fffa86' />
          <polygon points='0,0 -36,-50 0,-100' fill='#ffa371' />
        </g>
        <g transform='rotate(-144)'>
          <polygon points='0,0 36,-50 0,-100' fill=' 	#fffa86' />
          <polygon points='0,0 -36,-50 0,-100' fill='#ffa371' />
        </g>
      </motion.g>
    </svg>
  );
}

export default Star;
