import React from 'react';
import { motion } from 'framer-motion';
import DatasetCard from './DatasetCard';

export default function DatasetGrid({ datasets, isLoading }) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="h-64 rounded-[32px] bg-gradient-to-br from-[#F7F5F2] to-[#E8E4DF]/50 animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (!datasets || datasets.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center py-16 text-center"
      >
        <div className="w-20 h-20 rounded-full bg-[#A8B5A0]/10 flex items-center justify-center mb-4">
          <span className="text-3xl">📊</span>
        </div>
        <h3 className="font-serif text-xl text-[#4A4A4A] mb-2">No datasets found</h3>
        <p className="text-sm text-[#7A7A7A]">Try adjusting your filters or search terms</p>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {/* Featured large card */}
      {datasets.length > 0 && datasets[0].is_featured && (
        <div className="md:col-span-2 xl:col-span-2 xl:row-span-1">
          <DatasetCard dataset={datasets[0]} index={0} size="large" />
        </div>
      )}
      
      {/* Regular cards */}
      {datasets.map((dataset, index) => {
        if (index === 0 && dataset.is_featured) return null;
        return (
          <DatasetCard 
            key={dataset.id} 
            dataset={dataset} 
            index={index}
          />
        );
      })}
    </div>
  );
}