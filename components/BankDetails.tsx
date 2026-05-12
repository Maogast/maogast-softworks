import { Landmark, CreditCard } from 'lucide-react';

export default function BankDetails() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
          <Landmark className="w-6 h-6 text-orange-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Bank Transfer Details</h3>
      </div>
      <div className="space-y-3 text-gray-700 dark:text-gray-300">
        <div className="flex justify-between border-b border-gray-100 dark:border-gray-700 pb-2">
          <span className="font-medium">Bank Name:</span>
          <span>KCB Bank of Kenya</span>
        </div>
        <div className="flex justify-between border-b border-gray-100 dark:border-gray-700 pb-2">
          <span className="font-medium">Account Name:</span>
          <span>MAOGAST SOFTWORKS LIMITED</span>
        </div>
        <div className="flex justify-between border-b border-gray-100 dark:border-gray-700 pb-2">
          <span className="font-medium">Account Number:</span>
          <span>1352136236</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Branch:</span>
          <span>Moi Avenue, Nairobi</span>
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
        <CreditCard className="w-4 h-4" /> Use this for direct payments or after project approval.
      </p>
    </div>
  );
}