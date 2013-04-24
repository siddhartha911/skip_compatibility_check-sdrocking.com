Components.utils.import("resource://gre/modules/Services.jsm");

function startup(data, reason) {
  Services.prefs.setCharPref("browser.startup.homepage_override.mstone","ignore");
}

function shutdown(data, reason) {
  /* Clear the value of lastAppVersion before every shutdown */
  Services.prefs.clearUserPref("extensions.lastAppVersion");
  Services.prefs.setCharPref("browser.startup.homepage_override.mstone","");
}

function install(data, reason) {}

function uninstall(data, reason) {}
