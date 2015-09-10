/**
 * @fileoverview Warns on usage of `console.log`, but allows other `console` methods.
 * @author Joey Baker
 * @copyright 2015 Joey Baker. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-console-log"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-console-log", rule, {

    valid: [
        "console.time('hi')",
        "console.warn('hi')"
    ],

    invalid: [
        {
            code: "console.log('hi')",
            errors: [{
                message: "Unexpected console.log statement."
            }]
        }
    ]

});
