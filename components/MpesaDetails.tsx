'use client';

import { Smartphone, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function MpesaDetails() {
  const [copiedPaybill, setCopiedPaybill] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState(false);

  const handleCopy = (text: string, type: 'paybill' | 'account') => {
    navigator.clipboard.writeText(text);
    if (type === 'paybill') {
      setCopiedPaybill(true);
      setTimeout(() => setCopiedPaybill(false), 2000);
    } else {
      setCopiedAccount(true);
      setTimeout(() => setCopiedAccount(false), 2000);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-5 mt-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
          <Smartphone className="w-5 h-5 text-green-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">M-Pesa Payment</h3>
      </div>
      
      <div className="space-y-3 text-sm">
        <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-2">
          <span className="font-medium text-gray-700 dark:text-gray-300">Paybill Number:</span>
          <div className="flex items-center gap-3">
            <span className="font-mono font-bold text-orange-600">522533</span>
            <button
              onClick={() => handleCopy('522533', 'paybill')}
              className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-400 hover:text-gray-600"
              title="Copy Paybill"
            >
              {copiedPaybill ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-2">
          <span className="font-medium text-gray-700 dark:text-gray-300">Account Number:</span>
          <div className="flex items-center gap-3">
            <span className="font-mono font-bold text-orange-600">8091774</span>
            <button
              onClick={() => handleCopy('8091774', 'account')}
              className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-400 hover:text-gray-600"
              title="Copy Account Number"
            >
              {copiedAccount ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
        <p className="text-xs text-green-800 dark:text-green-300 leading-relaxed">
          💡 <strong>How to pay:</strong> Open Safaricom M-Pesa → <strong>Lipa na M-Pesa</strong> → <strong>Paybill</strong> → Enter Business Number <strong>522533</strong> → Account Number <strong>8091774</strong> → Enter amount and PIN.
        </p>
      </div>
    </div>
  );
}