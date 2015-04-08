// Copyright 2013 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview Launch the Chrome Connectivity Debugger app.
 * @author ebeach@google.com (Eric Beach)
 */

window.addEventListener('load', function load(event) {
  var app = new ChromeConnectivityDebugger();
  app.launch();
}, false);
