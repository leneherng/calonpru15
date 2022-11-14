'use client';

import { MouseEventHandler, useState } from 'react';
import Map from '#/ui/Map';
import Candidates from '#/ui/Candidates';
import candidates from '#/lib/data/candidates';

export default function Page() {
  const [code, setCode] = useState<number>(0);

  const onClickHandler: MouseEventHandler<SVGGElement> = (
    e: React.MouseEvent<SVGGElement>,
  ) => {
    const g: SVGGElement = e.currentTarget;
    setCode(+g.id);
  };

  return (
    <div className="p-2">
      <div className="p-2">
        <div className="grid-cols-[max(800px),400px] grid gap-x-8 py-2">
          <div className="col-start-1 px-4">
            <div className="flex justify-center text-xl font-bold text-gray-900">
              GE15 Candidates
            </div>
            <Map onClickHandler={onClickHandler} />
          </div>
        <div className="col-start-1 lg:col-start-2">
          <Candidates area={candidates[code]} />
        </div>
        </div>
      </div>
    </div>
  );
}