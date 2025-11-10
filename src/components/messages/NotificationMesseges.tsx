import { motion, AnimatePresence } from "framer-motion";

interface NotificationMessegesProps {
  children: string;
  isVisible?: boolean;
}

export default function NotificationMesseges({
  children,
  isVisible = false,
}: NotificationMessegesProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="
            z-50 p-2.5 w-[300px] max-h-[220px] overflow-y-auto 
            dark:text-neutral-950 text-neutral-50 dark:bg-neutral-50 
            bg-neutral-800 rounded-xl shadow-lg border border-gray-200
          "
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
