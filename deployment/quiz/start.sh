#!/bin/bash
export PORT=3001
export NODE_ENV=production
export PATH=/opt/plesk/node/20/bin:$PATH

# Ensure Prisma client is available
npx prisma generate

# Start the Next.js server
node server.js

