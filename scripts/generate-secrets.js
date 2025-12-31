#!/usr/bin/env node

/**
 * Script to generate secure random secrets for deployment
 * Usage: node scripts/generate-secrets.js
 */

const crypto = require('crypto');

function generateSecret() {
  return crypto.randomBytes(32).toString('base64');
}

console.log('\n🔐 Generated Secrets for Deployment\n');
console.log('Copy these values to your .env.local or Vercel Environment Variables:\n');
console.log('─'.repeat(70));
console.log('\nNEXTAUTH_SECRET=' + generateSecret());
console.log('\nCRON_SECRET=' + generateSecret());
console.log('\n─'.repeat(70));
console.log('\n💡 These secrets are randomly generated and secure.');
console.log('   Keep them private and never commit them to version control.\n');

