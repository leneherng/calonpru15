import { Candidate } from '#/lib/data/candidates';
import Image from 'next/image';
import BN from '#/public/bn.jpg';
import GPS from '#/public/gps.jpg';
import GRS from '#/public/grs.jpg';
import KDM from '#/public/kdm.jpg';
import MUDA from '#/public/muda.jpg';
import PAS from '#/public/pas.jpg';
import PBK from '#/public/pbk.jpg';
import PBM from '#/public/pbm.jpg';
import PBDS from '#/public/pbds.jpg';
import PBRS from '#/public/pbrs.jpg';
import PEJUANG from '#/public/pejuang.jpg';
import PH from '#/public/ph.jpg';
import PN from '#/public/pn.jpg';
import PRM from '#/public/prm.jpg';
import PSB from '#/public/psb.jpg';
import Putra from '#/public/putra.jpg';
import Sedar from '#/public/sedar.jpg';
import Warisan from '#/public/warisan.jpg';

export const CandidateCard = ({ candidates }: { candidates: Candidate[] }) => {
  return (
    <div className="min-w-full overscroll-y-auto space-y-2">
      {candidates.map((item, index) => (
        <div className="flex min-w-full bg-gray-200 rounded-xl space-x-2 py-2 px-4" key={index}>
          <span className="flex h-10 w-10">
            {item.coalition === "BN" && <Image src={BN} className="rounded-md" alt="BN"/>}
            {item.coalition === "GPS" && <Image src={GPS} className="rounded-md" alt="GPS"/>}
            {item.coalition === "GRS" && <Image src={GRS} className="rounded-md" alt="GRS"/>}
            {item.coalition === "GTA" && <Image src={PEJUANG} className="rounded-md" alt="GTA"/>}
            {item.coalition === "MUDA" && <Image src={MUDA} className="rounded-md" alt="MUDA"/>}
            {item.coalition === "PAS" && <Image src={PAS} className="rounded-md" alt="PAS"/>}
            {item.coalition === "PBRS" && <Image src={PBRS}className="rounded-md" alt="PBRS"/>}
            {item.coalition === "PH" && <Image src={PH} className="rounded-md" alt="PH"/>}
            {item.coalition === "PN" && <Image src={PN} className="rounded-md" alt="PN"/>}
            {item.coalition === "Putra" && <Image src={Putra} className="rounded-md" alt="Putra"/>}
            {item.party === "KDM" && <Image src={KDM} className="rounded-md" alt="KDM"/>}
            {item.party === "PBDS" && <Image src={PBDS} className="rounded-md" alt="PBDS"/>}
            {item.party === "PBK" && <Image src={PBK} className="rounded-md" alt="PBK"/>}
            {item.party === "PBM" && <Image src={PBM} className="rounded-md" alt="PBM"/>}
            {item.party === "PRM" && <Image src={PRM} className="rounded-md" alt="PRM"/>}
            {item.party === "PSB" && <Image src={PSB} className="rounded-md" alt="PSB"/>}
            {item.party === "SEDAR" && <Image src={Sedar} className="rounded-md" alt="Sedar"/>}
            {item.party === "WARISAN" && <Image src={Warisan} className="rounded-md" alt="Warisan"/>}
            {item.party === "Independent" && <div className="h-10 w-10 bg-gray-700 rounded-md"/>}
            {item.party === "PBPN" && <div className="h-10 w-10 bg-gray-700 rounded-md"/>}
          </span>
          <div className='flex flex-col'>

          <div className="flex">
            {item.coalition ? (
              <span className="text-xs font-normal text-gray-600">
                {item.coalition}
                <span>-</span>
              </span>
            ) : null}
            <span className="text-xs font-normal text-gray-600">{item.party}</span>
          </div>
          <div className="text-sm font-semibold text-gray-800">{item.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
