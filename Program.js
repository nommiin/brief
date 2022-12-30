const fs = require("node:fs");
const FileEditor = require("./FileEditor");
const Scanner = require("./Scanner");
const Processor = require("./Processor");

/**
 * Written by Nommiin - https://github.com/Nommiin
 */ 
class Program {
    /**
     * Entry point for tool, see Configuration.js for options
     * @param {string} target Path to file to scan
     */
    static main(target) {
        // Load file into a FileEditor
        const file = new FileEditor(target);
        if (file.Size === 0) throw `Could not read file, contents is empty`;
        
        // Get content from FileEditor and create Scanner
        const scanner = new Scanner(file.Content);
        if (scanner.Tokens.length === 0) throw `Could not read file, scanned tokens list is empty`;
        
        // Run scanned tokens through processor to add more context
        const tokens = new Processor(scanner.Tokens).get();
        if (tokens.length === 0) throw `Could not parse wrapper, processed token list is empty`;

        // If Configuration.WRITE_TOKENS is true, token output can be found in "tokens.json"
    }
}

module.exports = Program;
if (!global["__program_main"]) if (!global["__program_warn"]) {global["__program_warn"]=1;console.error("Please execute the program by running main.js");}