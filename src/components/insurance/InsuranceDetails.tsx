import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Check, AlertCircle } from 'lucide-react';
import { colors } from '../../theme/colors';
import { Button } from '../common/Button';

interface InsuranceDetailsProps {
  policyNumber: string;
  provider: string;
  coverage: string[];
  validUntil: string;
  onRenew: () => void;
}

export function InsuranceDetails({
  policyNumber,
  provider,
  coverage,
  validUntil,
  onRenew
}: InsuranceDetailsProps) {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">Insurance Policy</h3>
          <p className="text-gray-600">Policy #{policyNumber}</p>
        </div>
        <Shield size={32} style={{ color: colors.primary }} />
      </div>

      <div className="space-y-4">
        <div className="p-4 rounded-xl bg-gray-50">
          <h4 className="font-semibold mb-2">Provider</h4>
          <p>{provider}</p>
        </div>

        <div className="p-4 rounded-xl bg-gray-50">
          <h4 className="font-semibold mb-2">Valid Until</h4>
          <p>{validUntil}</p>
        </div>

        <div className="p-4 rounded-xl bg-gray-50">
          <h4 className="font-semibold mb-4">Coverage</h4>
          <ul className="space-y-2">
            {coverage.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-2 text-gray-600"
                whileHover={{ x: 5 }}
              >
                <Check size={16} className="text-green-500" />
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-4">
        <Button
          variant="primary"
          fullWidth
          onClick={onRenew}
          icon={<Shield size={18} />}
        >
          Renew Policy
        </Button>
      </div>
    </div>
  );
}