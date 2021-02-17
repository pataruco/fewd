#!/bin/bash
set -euo pipefail

declare -a folders

folders=($(ls -d */ | cut -f1 -d'/'))

starterCode="starter-code"
solutionCode="solution-code"

deleteZip() {
  for f in "${folders[@]}"; do
    printf "✏️  Deleting zip files on: ${f} \n"
    eval "rm -rf ${f}/*.zip"
  done
}

deleteZip

createZip() {
  for f in "${folders[@]}"; do
    printf "🗜 Creating zip files on: ${f} \n"
    printf "🗜 Creating zip file for starter code 🧪\n"
    eval "zip -r ${f}/${f}-${starterCode}.zip ${f}/${starterCode}" || printf "🧪 Not starter code found 🙅🏻‍♂️\n"
    printf "🗜 Creating zip file for solution code 🏁\n"
    eval "zip -r ${f}/${f}-${solutionCode}.zip ${f}/${solutionCode}" || printf "🏁 Not solution code found 🙅🏻‍♂️\n"
  done
}

deleteZip
createZip
