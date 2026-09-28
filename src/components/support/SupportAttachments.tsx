import { useRef } from 'react'
import {
  ALLOWED_ATTACHMENT_TYPES,
  MAX_ATTACHMENTS,
  MAX_ATTACHMENT_BYTES,
  readFileAsBase64,
  truncateFileName,
  type ClientAttachment,
} from '@/lib/support/attachments'
import { useTranslations } from '@/locales/useTranslations'

type SupportAttachmentsProps = {
  attachments: ClientAttachment[]
  onChange: (attachments: ClientAttachment[]) => void
  onError: (message: string) => void
  disabled?: boolean
}

const ACCEPT = ALLOWED_ATTACHMENT_TYPES.join(',')

export const SupportAttachments = ({
  attachments,
  onChange,
  onError,
  disabled,
}: SupportAttachmentsProps) => {
  const t = useTranslations()
  const inputRef = useRef<HTMLInputElement>(null)

  const addFiles = async (files: FileList | null) => {
    if (!files?.length) return
    onError('')
    const next = [...attachments]

    for (const file of Array.from(files)) {
      if (next.length >= MAX_ATTACHMENTS) {
        onError(t('support.file_too_many'))
        break
      }
      const mimeType = file.type || 'application/octet-stream'
      if (
        !ALLOWED_ATTACHMENT_TYPES.includes(
          mimeType as (typeof ALLOWED_ATTACHMENT_TYPES)[number]
        )
      ) {
        onError(t('support.file_type_invalid'))
        continue
      }
      if (file.size > MAX_ATTACHMENT_BYTES) {
        onError(t('support.file_too_large'))
        continue
      }
      try {
        const data = await readFileAsBase64(file)
        next.push({
          fileName: file.name,
          mimeType,
          data,
        })
      } catch {
        onError(t('support.file_read_error'))
      }
    }

    onChange(next)
    if (inputRef.current) inputRef.current.value = ''
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        accept={ACCEPT}
        disabled={disabled || attachments.length >= MAX_ATTACHMENTS}
        onChange={(e) => void addFiles(e.target.files)}
      />

      {attachments.map((file, index) => (
        <div
          key={`${file.fileName}-${index}`}
          className="inline-flex h-6 max-w-full items-center gap-1.5 rounded bg-[#dee2e9] px-2 text-[13px] leading-none text-[#555E74]"
        >
          <FileIcon />
          <span className="max-w-[120px] truncate" title={file.fileName}>
            {truncateFileName(file.fileName)}
          </span>
          <button
            type="button"
            disabled={disabled}
            aria-label={t('support.remove_file')}
            onClick={() => onChange(attachments.filter((_, i) => i !== index))}
            className="flex h-4 w-4 shrink-0 items-center justify-center rounded hover:bg-gray-100"
          >
            <svg
              aria-hidden="true"
              width="12"
              height="12"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M12.5 3.5 3.5 12.5M3.5 3.5l9 9"
                stroke="#555E74"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      ))}

      <button
        type="button"
        disabled={disabled || attachments.length >= MAX_ATTACHMENTS}
        onClick={() => inputRef.current?.click()}
        className={`inline-flex h-6 items-center gap-1 rounded border border-[#cbcfd8] bg-white px-1.5 text-xs font-medium leading-none text-[#555E74] hover:bg-gray-050 disabled:pointer-events-none disabled:opacity-55`}
      >
        <UploadIcon />
        <span>{t('support.upload')}</span>
      </button>
    </div>
  )
}

const FileIcon = () => (
  <svg
    className="h-4 w-4 shrink-0"
    viewBox="0 0 24 24"
    aria-hidden="true"
    fill="none"
    stroke="#555E74"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
    <path d="M14 3v5h5" />
    <path d="M9 13h6M9 17h4" />
  </svg>
)

const UploadIcon = () => (
  <svg
    className="h-[15px] w-[15px] shrink-0"
    viewBox="0 0 24 24"
    aria-hidden="true"
    fill="none"
    stroke="#555E74"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 15V4" />
    <path d="M7 9l5-5 5 5" />
    <path d="M4 17v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2" />
  </svg>
)
