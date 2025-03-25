#!/usr/bin/env node

import log from './logger';

async function executeCli(): Promise<void> {
    log.info("This CLI works!");
}

executeCli().catch((error) => {
    log.error(`Unhandled error: ${error}`);
    process.exit(1);
});
