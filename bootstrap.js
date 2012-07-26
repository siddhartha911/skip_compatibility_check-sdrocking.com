Components.utils.import("resource://gre/modules/Services.jsm");

function startup(data, reason) {}

function shutdown(data, reason) {
  /* Clear the value of lastAppVersion before every shutdown */
  Services.prefs.clearUserPref("extensions.lastAppVersion");
}

function install(data, reason) {}

function uninstall(data, reason) {}
