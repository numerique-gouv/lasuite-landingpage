import { useState, useSyncExternalStore } from 'react'

const STORAGE_KEY = 'docs-maintenance-alert-2026-10-04'
/** Hidden from Sunday 4 October 2026, 12:00 Europe/Paris. */
const HIDDEN_FROM = Date.parse('2026-10-04T12:00:00+02:00')

const subscribe = () => () => {}

const isDismissed = () => {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    return false
  }
}

export const MaintenanceAlert = () => {
  const storedDismissed = useSyncExternalStore(
    subscribe,
    isDismissed,
    // Hidden in the server HTML so a dismissed alert never flashes on reload.
    () => true
  )
  const [dismissed, setDismissed] = useState(false)

  if (Date.now() >= HIDDEN_FROM || storedDismissed || dismissed) {
    return null
  }

  const close = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, '1')
    } catch {
      // Private mode can block storage; the alert still closes for this view.
    }
    setDismissed(true)
  }

  return (
    <>
      <div aria-hidden="true" className="h-28 md:h-20" />
      <div className="pointer-events-none fixed inset-x-0 bottom-[4.75rem] z-50 p-3 md:bottom-0 md:p-4">
        <div
          role="status"
          className="pointer-events-auto mx-auto box-border min-h-12 max-w-container rounded-[8px] border border-[#FFCA9C] bg-[#FFEEDF] p-2 text-sm font-medium leading-snug text-[#6C3A19]"
        >
          <div className="flex min-w-0 items-center gap-2">
            <span
              className="flex h-6 w-6 shrink-0 items-center justify-center"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill="currentColor"
                  d="M12.01 16a1 1 0 1 1 0 2H12a1 1 0 1 1 0-2zM12 8a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1"
                />
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M11.99 1.986A3 3 0 0 1 14.6 3.504L22.597 17.5l.092.174a3.003 3.003 0 0 1-1.189 3.923 3 3 0 0 1-1.499.403H4a3 3 0 0 1-3.018-2.993 3 3 0 0 1 .4-1.503l8-14a3 3 0 0 1 2.608-1.518m0 2a1 1 0 0 0-.87.507v.003l-8 14-.004.004a1.002 1.002 0 0 0 .875 1.5H20a1 1 0 0 0 .865-.5 1 1 0 0 0 0-1l-.002-.004-8-14-.002-.003a1 1 0 0 0-.87-.507"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <div className="min-w-0 flex-1">
              <span>
                <strong className="font-bold">
                  Maintenance programmée du Samedi 03/10 à 18h au Dimanche 04/10
                  à 12h
                </strong>
                {
                  ' : Docs sera inaccessible sur la période. Merci de votre compréhension'
                }
              </span>
            </div>
            <div className="ms-auto flex shrink-0 items-center">
              <button
                type="button"
                onClick={close}
                aria-label="Fermer l'alerte"
                className="flex h-8 min-h-8 w-8 min-w-8 items-center justify-center rounded border border-transparent bg-transparent p-0 text-base font-medium text-[#A75400] hover:bg-[#FFDCBE] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12 19 6.4 17.6 5 12 10.6z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
