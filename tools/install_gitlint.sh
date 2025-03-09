#!/usr/bin/env bash

set -eEuo pipefail 
script_dir="$(dirname "$0")"
project_dir="$(realpath "${script_dir}/..")"
PYTHON_BIN="$(which python3)"
if [ -z "${PYTHON_BIN}" ]; then
  echo "❌ Python3 not found, please install it and try again"
  exit 1
fi
$PYTHON_BIN -m venv "${project_dir}/env-gitlint"

(
  source "${project_dir}/env-gitlint/bin/activate"
  pip install -r "${project_dir}/tools/requirements-gitlint.txt"
)

echo "✅ Gitlint installed successfully"
