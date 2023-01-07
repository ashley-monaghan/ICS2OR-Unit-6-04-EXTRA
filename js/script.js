// Copyright (c) 2022 Ashley Monaghan All rights reserved
//
// Created by: Ashley Monaghan
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2OR-Unit-6-04-EXTRA/sw.js", {
    scope: "/ICS2OR-Unit-6-04-EXTRA/",
  })
}

/**
 * This function displays an alert.
 * Math
 */
window.onload = function () {
  const params = new URLSearchParams(document.location.search)

  // input
  const length = params.get("L")
  console.log(length)
  const width = params.get("W")
  console.log(width)
  const height = params.get("H")
  console.log(height)

  // process
  const volume = (length * width * height) / 3
  const dimension1 = "<ul>\n<li>r = " + length + "</li>\n</ul>"
  const dimension2 = "<ul>\n<li>r = " + width + "</li>\n</ul>"
  const dimension3 = "<ul>\n<li>r = " + height + "</li>\n</ul>"

  // output
  document.getElementById("dimension").innerHTML = dimensions
  document.getElementById("volume").innerHTML =
    "The volume is: " + volume.toFixed(2) + " cm³!"
}
