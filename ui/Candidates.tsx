'use client';

import { Constituency } from '#/lib/data/candidates';
import { CandidateCard } from '#/ui/CandidateCard';

const Candidates = ({ area }: { area: Constituency }) => {
  return (
    <div className="flex flex-col min-w-full min-h-full rounded-2xl bg-gray-100 p-4">
      {area ? 
        <>
          <div className="flex p-2 space-x-4">
            <span className="text-lg font-bold text-gray-800">{area.code}</span>
            <span className="text-lg font-bold text-gray-800">{area.name}</span>
          </div>
          <div className="flex min-w-full space-x-4 p-2">
            <CandidateCard candidates={area.candidates} />
          </div>
        </>
      : null}
    </div>
  );
};

export default Candidates;
