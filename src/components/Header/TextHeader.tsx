import { IMAGES } from '../../utils/constants';
import { motion } from 'framer-motion';

export const TextHeader = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
      <div className="header-image-container">
        <img src={IMAGES.TextImage} alt="Text Image" />
      </div>

      <h1 className="header-title">A team with big ideas</h1>

      <p className="header-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
        viverra maecenas accumsan lacus vel facilisis.
      </p>

      <button className="header-button">Get in touch</button>
    </motion.div>
  );
};
