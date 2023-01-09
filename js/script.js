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
  const length = params.get("a")
  console.log(length)

  // process
  const volume = length ** 3
  const dimension = "<ul>\n<li>a = " + length + "</li>\n</ul>"

  // output
  document.getElementById("dimension").innerHTML = dimension
  document.getElementById("volume").innerHTML =
    "The volume is: " + volume.toFixed(2) + " cm³!"
}
