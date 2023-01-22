import { IMAGES } from '../../utils/constants';
import { motion } from 'framer-motion';

export const ImageHeader = () => {
  return (
    <motion.img
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.1 }}
      src={IMAGES.HeaderLogo}
      alt="Header Logo"
    />
  );
};
