#!/usr/bin/env bash

set -eEuo pipefail

script_dir="$(dirname "$0")"
project_dir="$(realpath "${script_dir}/..")"
readonly activate_file="${project_dir}/env-gitlint/bin/activate"

if [ ! -f "${activate_file}" ]; then
  echo '❌ Please run "npm run gitlint:install" first'
  exit 1
fi

(
  source "${activate_file}"
  if gitlint lint; then 
    echo -e "\n✅ All good!"
  else
    echo -e "\n⚠️ Commit messages do not follow the convention, to help you, take a look at this guide: https://suitenumerique.gitbook.io/handbook/git"
  fi
)
