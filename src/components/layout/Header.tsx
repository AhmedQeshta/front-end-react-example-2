import { ImageHeader, TextHeader } from '../Header';
import '../../assets/styles/header.css';
import { IMAGES } from '../../utils/constants';
import { motion } from 'framer-motion';
export const Header = () => {
  return (
    <header className="header-container">
      <main className="header-text">
        <TextHeader />
      </main>

      <main className="header-logo">
        <ImageHeader />
      </main>

      <motion.div
        initial={{ y: 100, x: -100, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 1 }}
        transition={{ duration: 1.3 }}
        className="header-shape-v">
        <img src={IMAGES.shapeV} alt="shape V" />
      </motion.div>

      <motion.div
        initial={{ y: 100, x: -100, opacity: 0 }}
        animate={{ y: -100, x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="header-shape-h">
        <img src={IMAGES.shapeH} alt="shape H" />
      </motion.div>
    </header>
  );
};
