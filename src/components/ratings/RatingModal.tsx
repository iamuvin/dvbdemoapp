import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { colors } from '../../theme/colors';

interface RatingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (rating: number, feedback: string) => void;
  providerName: string;
}

export function RatingModal({ isOpen, onClose, onSubmit, providerName }: RatingModalProps) {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-xl w-full max-w-md p-6"
      >
        <h2 className="text-xl font-semibold mb-4">Rate Your Experience</h2>
        <p className="text-gray-600 mb-6">How was your service with {providerName}?</p>

        <div className="flex justify-center space-x-2 mb-6">
          {[1, 2, 3, 4, 5].map((value) => (
            <motion.button
              key={value}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setRating(value)}
              className="p-1"
            >
              <Star
                size={32}
                className={value <= rating ? 'fill-current' : ''}
                style={{ color: value <= rating ? colors.primary : '#D1D5DB' }}
              />
            </motion.button>
          ))}
        </div>

        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Share your experience (optional)"
          className="w-full p-3 border rounded-lg mb-6 h-32 resize-none"
          style={{ borderColor: colors.primary }}
        />

        <div className="flex space-x-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-lg border-2 font-medium"
            style={{ borderColor: colors.primary, color: colors.primary }}
          >
            Cancel
          </button>
          <button
            onClick={() => onSubmit(rating, feedback)}
            className="flex-1 py-3 rounded-lg text-white font-medium"
            style={{ backgroundColor: colors.primary }}
          >
            Submit Rating
          </button>
        </div>
      </motion.div>
    </div>
  );
}