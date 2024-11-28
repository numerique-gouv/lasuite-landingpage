import Link from 'next/link'
import GristGouvLogo from '@/assets/grist-summit/gristgouv-hex.svg'
import Image from 'next/image'
import { Button } from '@/components/Button'
export default function GristParisSummit2024() {
  return (
    <div className="max-w-[640px] mx-auto">
      <div className="p-4 flex items-center gap-4">
        <Image className="w-[60px] h-auto" src={GristGouvLogo} alt="" />
        <h1 className="text-blue-1 text-2xl font-extrabold">
          Grist Paris <br />
          Summit
        </h1>
      </div>

      <div className="text-lg">
        <p className="mb-0 p-2">
          <Button fullWidth href="/grist-paris-summit-2024#schedule">
            Schedule
          </Button>
        </p>
        <h2 className="font-bold text-lg p-2 pb-0">
          Main Stage transcriptions
        </h2>
        <p className="mb-0 p-2">
          <Button
            variant="outline"
            fullWidth
            href="https://www.tadeo.fr/event/DINUM_03_12_24_FR/?path=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJib29raW5nX2lkIjoiMTQ2ODA3IiwidGl0bGUiOiJESU5VTSIsImJhc2VQYXRoIjoiaHR0cHM6XC9cL3d3dy50YWRlby5mclwvZXZlbnRcL0RJTlVNXzAzXzEyXzI0X0ZSXC8iLCJwcm90b2NvbCI6InYxLmNsaWVudC13ZWItYXBwIn0.xmM05oDjPz_idgYNlfsHOvFbC-5izgDpiuw5mADrWbc"
          >
            <span>
              <span className="block">French transcription</span>
              <span className="text-sm italic" lang="fr">
                transcription en français
              </span>
            </span>
          </Button>
        </p>
        <p className="mb-0 p-2">
          <Button
            fullWidth
            variant="outline"
            href="https://www.tadeo.fr/event/DINUM_03_12_24_EN/?path=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJib29raW5nX2lkIjoiMTQ2ODA0IiwidGl0bGUiOiJESU5VTSIsImJhc2VQYXRoIjoiaHR0cHM6XC9cL3d3dy50YWRlby5mclwvZXZlbnRcL0RJTlVNXzAzXzEyXzI0X0VOXC8iLCJwcm90b2NvbCI6InYxLmNsaWVudC13ZWItYXBwIn0.C2VGbZaK4kVBOAHoK03Nu34C45eGIDDiJyXr4WiK46A"
          >
            English transcription
          </Button>
        </p>
        <h2 className="font-bold text-lg p-2">Wi-Fi info</h2>
        <p className="mb-0 px-2 text-base">Network: GUEST-Albert</p>
        <p className="mb-0 p-2 text-base">
          Password:{' '}
          <code className="p-[4px] bg-grey-6 border border-grey-0 rounded-md">
            Grist Paris Summit
          </code>
        </p>
      </div>
    </div>
  )
}
