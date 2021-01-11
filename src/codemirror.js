import _CodeMirror from 'codemirror'

const globalCodeMirror = () => {
  return process.env.EXCLUDE_GLOBAL_CODEMIRROR ? undefined : window.CodeMirror // eslint-disable-line
}

const CodeMirror = globalCodeMirror() || _CodeMirror

export default CodeMirror


