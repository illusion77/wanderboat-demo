"use client";

import { motion } from "framer-motion";

export const Zoom = ({ children }: { children: React.ReactNode }) => (
  <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
    {children}
  </motion.button>
);