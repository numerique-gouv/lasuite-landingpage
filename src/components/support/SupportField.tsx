import type { ChangeEvent, Ref } from 'react'

const controlClass =
  'w-full rounded border border-[#cbcfd8] bg-transparent px-3 py-2.5 text-sm text-greyscale-950 outline-none focus:border-brand-550 focus:shadow-[0_0_0_1px_#3e5de7]'

const controlErrorClass =
  'w-full rounded border border-[#ce0500] bg-transparent px-3 py-2.5 pr-10 text-sm text-greyscale-950 outline-none focus:border-[#ce0500] focus:shadow-[0_0_0_1px_#ce0500]'

export type SupportFieldProps = {
  id: string
  label: string
  error?: string | null
  value: string
  onChange: (value: string) => void
  required?: boolean
  as?: 'input' | 'textarea'
  inputRef?: Ref<HTMLInputElement | HTMLTextAreaElement>
  type?: string
  autoComplete?: string
  rows?: number
}

export function SupportField({
  id,
  label,
  error,
  value,
  onChange,
  required,
  as = 'input',
  inputRef,
  type = 'text',
  autoComplete,
  rows,
}: SupportFieldProps) {
  const Control = as
  const invalid = !!error
  const errorId = `${id}-invalid`
  const isTextarea = as === 'textarea'

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium leading-[18px]">
        {label}
      </label>
      <div className="relative">
        <Control
          ref={inputRef as Ref<HTMLInputElement & HTMLTextAreaElement>}
          id={id}
          required={required}
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
            onChange(e.target.value)
          }
          aria-invalid={invalid}
          aria-describedby={invalid ? errorId : undefined}
          className={`${isTextarea ? 'min-h-24 resize-y ' : ''}${
            invalid ? controlErrorClass : controlClass
          }`}
          {...(isTextarea ? { rows } : { type, autoComplete })}
        />
        {invalid && (
          <span
            aria-hidden="true"
            className={`pointer-events-none leading-none absolute right-3 flex h-5 w-5 items-center justify-center ${
              isTextarea ? 'top-3' : 'top-1/2 -translate-y-1/2'
            }`}
          >
            <svg
              aria-hidden="true"
              className="w-full h-full"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.33984 9.33333C7.70803 9.33333 8.00651 9.63181 8.00651 10C8.00651 10.3682 7.70803 10.6667 7.33984 10.6667H7.33333C6.96514 10.6667 6.66667 10.3682 6.66667 10C6.66667 9.63181 6.96514 9.33333 7.33333 9.33333H7.33984Z"
                fill="#CF202D"
              />
              <path
                d="M7.33333 4C7.70152 4 8 4.29848 8 4.66667V7.33333C8 7.70152 7.70152 8 7.33333 8C6.96514 8 6.66667 7.70152 6.66667 7.33333V4.66667C6.66667 4.29848 6.96514 4 7.33333 4Z"
                fill="#CF202D"
              />
              <path
                d="M7.33333 0C11.3834 0 14.6667 3.28325 14.6667 7.33333C14.6667 11.3834 11.3834 14.6667 7.33333 14.6667C3.28325 14.6667 0 11.3834 0 7.33333C0 3.28325 3.28325 0 7.33333 0ZM7.33333 1.33333C4.01962 1.33333 1.33333 4.01962 1.33333 7.33333C1.33333 10.647 4.01962 13.3333 7.33333 13.3333C10.647 13.3333 13.3333 10.647 13.3333 7.33333C13.3333 4.01962 10.647 1.33333 7.33333 1.33333Z"
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="#CF202D"
              />
            </svg>
          </span>
        )}
      </div>
      {invalid && (
        <p id={errorId} className="m-0 text-[13px] text-[#ce0500]">
          {error}
        </p>
      )}
    </div>
  )
}
