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


        {/* <div className="col-start-1">
        <div className="text-xl font-medium text-gray-900">What is this?</div>
        <div className="space-y-4">
          <p className="space-y-2 text-sm text-gray-900">
            This is a cartogram. It is an alternative method of displaying a
            map.
          </p>
          <div className="text-md font-medium text-gray-900">
            Why not use a map?
          </div>
          <p className="space-y-2 text-sm text-gray-900">
            A couple of reasons:
          </p>
          <ul className="list-disc space-y-2 pl-4 text-sm text-gray-900">
            <li>
              The sizes of each state are drastically different when compared to
              each other. This results in a map where areas such as the Wilayah
              Persekutuan, become too tiny relative to other states.
            </li>
            <li>
              Other states however (looking at you Sarawak), have parliamentary
              seats that are drastically different in sizes, causing the
              mismatch relative to other seats.
            </li>
          </ul>
        </div>
      </div> */}
      </div>
    </div>
  );
}