'use strict'

import applyApi from './applyApi'
import { UserOptions } from './interfaces'

export type autoTable = (options: UserOptions) => void

let appliedApi = false

try {
  let jsPDF = require('jspdf')
  if (jsPDF) {
    applyApi(jsPDF)
    appliedApi = true
  }
} catch (err) {}

try {
  let jsPDF = require('jspdf/dist/jspdf.node.min')
  if (jsPDF) {
    applyApi(jsPDF)
    appliedApi = true
  }
} catch (err) {}

try {
  let jsPDF = require('jspdf/dist/jspdf.node.debug')
  if (jsPDF) {
    applyApi(jsPDF)
    appliedApi = true
  }
} catch (err) {}

if (!appliedApi) {
  console.error(
    'Could not initialize jsPDF-autoTable since jsPDF could not be found'
  )
}
