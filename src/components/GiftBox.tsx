import { motion } from 'framer-motion';

function GiftBox() {
  return (
    <motion.svg
      width='200'
      height='200'
      viewBox='-100 -100 200 200'
      className='gift'
    >
      <motion.circle
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          delay: 1.8,
        }}
        cx='0'
        cy='-50'
        r='10'
        fill='#a9172a'
      />
      <motion.rect
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          delay: 1.8,
        }}
        className='box'
        x='-60'
        y='-40'
        width='120'
        height='100'
      />
      <motion.rect
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          delay: 1.8,
        }}
        className='box'
        x='-70'
        y='-47'
        width='140'
        height='20'
      />
      <motion.rect
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          delay: 1.8,
        }}
        className='stripe'
        x='-20'
        y='-40'
        width='40'
        height='100'
      />
      <motion.rect
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          delay: 1.8,
        }}
        className='stripe'
        x='-25'
        y='-47'
        width='50'
        height='20'
      />

      <motion.path
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          delay: 1.8,
        }}
        className='ribbon'
        d='
      M 0 -50
      L 30 -50
      C 50 -50 50 -70 30 -65
      L 0 -50'
      />

      <motion.path
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          delay: 1.8,
        }}
        className='ribbon'
        d='
      M 0 -50
      L -30 -50
      C -50 -50 -50 -70 -30 -65
      L 0 -50'
      />
    </motion.svg>
  );
}

export default GiftBox;
