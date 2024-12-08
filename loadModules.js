function loadModule(moduleName) {
  try {
    const module = require(moduleName);
    console.log("\x1b[32m%s\x1b[0m", `${moduleName} loaded successfully`);
    return module;
  } catch (error) {
    console.error("\x1b[31m%s\x1b[0m", `failed to load ${moduleName}`, error);
    return null;
  }
}

// Special dotevn handler
const dotenv = loadModule("dotenv");
if (dotenv) {
  dotenv.config(); // Load environment variables from .env file
} else {
  console.error("Failed to load dotenv. Exiting...");
  process.exit(1);
}

//   const https = loadModule("https");
const express = loadModule("express");
const http = loadModule("http");
const socketIO = loadModule("socket.io");
const mysql = loadModule("mysql2");
const fs = loadModule("fs");
const path = loadModule("path");
const https = loadModule("https");
if (!express || !http || !socketIO || !mysql || !fs || !path || !https) {
  console.error("One or more modules failed to load. Exiting...");
  process.exit(1);
}

module.exports = { express, http, socketIO, mysql, fs, path, https };
