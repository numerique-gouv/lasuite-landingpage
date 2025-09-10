export function injectCrisp() {
  if (!window.$crisp) {
    window.$crisp = []
    window.CRISP_WEBSITE_ID = '58ea6697-8eba-4492-bc59-ad6562585041'

    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    script.src = 'https://client.crisp.chat/l.js'
    document.head.appendChild(script)
  }
}
