#!/usr/bin/env node

// Forked from eleventy v0.9.0

// This is a subtle fork for the main Eleventy cmd.js to behave as a module, returning `elev` so it can be npm-required
// It allows things like the below in gulp or paren node js; for more see https://github.com/khawkins98/gulp-eleventy-example
//
//   let elev = require('./eleventy-cmd.js');
//   elev.write().then( function() {
//     console.log('Done building 11ty');
//     yourCallBack();
//   });

const pkg = require("./node_modules/\@11ty/eleventy/package.json");
const chalk = require("chalk"); // node 4+
require("please-upgrade-node")(pkg, {
  message: function(requiredVersion) {
    return chalk.red(
      `Eleventy requires Node ${requiredVersion}. You’ll need to upgrade to use it!`
    );
  }
});

if (process.env.DEBUG) {
  require("time-require");
}

const EleventyErrorHandler = require("@11ty/eleventy/src/EleventyErrorHandler");

const argv = require("minimist")(process.argv.slice(2));
const Eleventy = require("@11ty/eleventy");
const EleventyCommandCheck = require("@11ty/eleventy/src/EleventyCommandCheck");
let elev = new Eleventy(argv.input, argv.output);

try {
  process.on("unhandledRejection", (error, promise) => {
    EleventyErrorHandler.error(promise, "Unhandled rejection in promise");
  });
  process.on("uncaughtException", e => {
    EleventyErrorHandler.fatal(e, "Uncaught exception");
  });
  process.on("rejectionHandled", promise => {
    EleventyErrorHandler.warn(
      promise,
      "A promise rejection was handled asynchronously"
    );
  });

  let cmdCheck = new EleventyCommandCheck(argv);
  cmdCheck.hasUnknownArguments();

  elev.setConfigPathOverride(argv.config);
  elev.setPathPrefix(argv.pathprefix);
  elev.setDryRun(argv.dryrun);
  elev.setPassthroughAll(argv.passthroughall);
  elev.setFormats(argv.formats);

  let isVerbose = process.env.DEBUG ? false : !argv.quiet;
  elev.setIsVerbose('*');

} catch (e) {
  EleventyErrorHandler.fatal(e, "Eleventy fatal error");
}

elev
  .init()
  .then( function() {
    if (argv.version) {
      console.log(elev.getVersion());
    } else if (argv.help) {
      console.log(elev.getHelp());
    } else if (argv.serve) {
      // Serve is instead run by the parent JS
    } else if (argv.watch) {
      // Watch is instead run by the parent JS
    } else {
      // No default
    }
  })
  .catch(EleventyErrorHandler.fatal);

module.exports = elev;