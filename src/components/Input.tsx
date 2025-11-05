import {
  useId,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  useState,
  Fragment,
  useRef,
  useEffect,
} from 'react'
import classNames from 'classnames'

type CommonProps = {
  label: string
  errors?: { errors: string[] }
}

type InputProps = CommonProps & {
  as?: never
} & InputHTMLAttributes<HTMLInputElement>

type TextareaProps = CommonProps & {
  as: 'textarea'
} & TextareaHTMLAttributes<HTMLTextAreaElement>

// these Input are uncontrolled for now, we have no current need for more
export const Input = (props: InputProps | TextareaProps) => {
  const [hasValue, setHasValue] = useState(false)
  const { label, as: Component = 'input', errors, className, ...rest } = props
  const autoId = useId()
  const id = rest.id ?? autoId

  // handle the case where the input is already filled when the component is mounted (because of page reload for example)
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (inputRef.current && !!inputRef.current.value) {
      setHasValue(true)
    }
  }, [])
  return (
    <div className={`text-left relative w-full`}>
      <div className={`relative w-full`}>
        <Component
          id={id}
          className={classNames(
            'w-full px-3 pt-5 pb-1 border border-[#c0c0c0] rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-1 peer',
            className
          )}
          onChange={(e) => setHasValue(!!e.target.value)}
          ref={inputRef}
          {...(!!errors?.errors?.length && {
            'aria-describedby': `${id}-error`,
          })}
          {...(rest as any)}
        />
        <label
          htmlFor={id}
          className={classNames(
            'transition duration-150 text-base text-[#747474] absolute top-0 left-3 h-fit bottom-0 peer-focus:text-xs peer-focus:-translate-y-3 peer-focus:text-blue-1',
            {
              'my-auto': Component !== 'textarea',
              'mt-4': Component === 'textarea',
              'text-base': !hasValue,
              'text-xs -translate-y-3 text-greyscale-600': hasValue,
            }
          )}
        >
          {label}
        </label>
      </div>
      {errors?.errors?.length && (
        <p id={`${id}-error`} className="mt-1 text-sm ml-2 text-error-1">
          {errors.errors.map((error) => (
            <Fragment key={error}>
              {error}
              <br />
            </Fragment>
          ))}
        </p>
      )}
    </div>
  )
}
