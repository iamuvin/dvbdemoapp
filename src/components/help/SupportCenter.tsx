import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Phone, Mail, MessageSquare } from 'lucide-react';
import { colors } from '../../theme/colors';
import { Button } from '../common/Button';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How do I request emergency service?',
    answer: 'Select your service type from the home screen and tap "Request Service". Our nearest provider will be dispatched to your location.'
  },
  {
    question: 'What are your service hours?',
    answer: 'We provide 24/7 emergency roadside assistance throughout Dubai and surrounding areas.'
  },
  {
    question: 'How do I pay for services?',
    answer: 'We accept credit cards, cash, and insurance coverage. You can manage your payment methods in the Payment section.'
  },
  // Add more FAQs as needed
];

export function SupportCenter() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Help & Support</h2>
        <HelpCircle size={24} style={{ color: colors.primary }} />
      </div>

      <div className="grid gap-4">
        <Button
          variant="outline"
          fullWidth
          icon={<Phone size={18} />}
        >
          Call Support
        </Button>
        
        <Button
          variant="outline"
          fullWidth
          icon={<MessageSquare size={18} />}
        >
          Live Chat
        </Button>
        
        <Button
          variant="outline"
          fullWidth
          icon={<Mail size={18} />}
        >
          Email Support
        </Button>
      </div>

      <div className="pt-6">
        <h3 className="font-semibold mb-4">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="p-4 rounded-xl bg-gray-50"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="font-medium mb-2">{faq.question}</h4>
              <p className="text-gray-600 text-sm">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}