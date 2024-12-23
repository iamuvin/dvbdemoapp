import React, { useState } from 'react';
import { Send, Image as ImageIcon, Paperclip } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { colors } from '../../theme/colors';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'provider';
  timestamp: Date;
  image?: string;
}

interface ChatInterfaceProps {
  isOpen: boolean;
  onClose: () => void;
  providerName: string;
}

export function ChatInterface({ isOpen, onClose, providerName }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    
    setMessages([
      ...messages,
      {
        id: Date.now().toString(),
        text: newMessage,
        sender: 'user',
        timestamp: new Date(),
      },
    ]);
    setNewMessage('');

    // Simulate provider response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        text: 'I'll be there in about 10 minutes.',
        sender: 'provider',
        timestamp: new Date(),
      }]);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          className="fixed inset-0 bg-white z-50"
        >
          {/* Header */}
          <div className="bg-white border-b px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button onClick={onClose} className="text-gray-600">
                ←
              </button>
              <div>
                <h3 className="font-semibold">{providerName}</h3>
                <p className="text-sm text-gray-500">Usually responds in 5 minutes</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[calc(100vh-140px)]">
            {messages.map(message => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.text}
                  {message.image && (
                    <img src={message.image} alt="" className="mt-2 rounded-lg" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t bg-white p-4">
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
                <ImageIcon size={20} />
              </button>
              <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
                <Paperclip size={20} />
              </button>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type a message..."
                className="flex-1 p-2 border rounded-full focus:outline-none focus:ring-2"
                style={{ borderColor: colors.primary }}
              />
              <button
                onClick={sendMessage}
                className="p-2 rounded-full"
                style={{ backgroundColor: colors.primary }}
              >
                <Send size={20} className="text-white" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}