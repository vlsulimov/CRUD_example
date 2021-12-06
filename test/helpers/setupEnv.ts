import { promisify } from 'util';
import { exec } from 'child_process';
import dotenv from 'dotenv';

dotenv.config();

export default async () => {
    const asyncExec = promisify(exec);

    try {
        await asyncExec('npm run db:drop');
    } catch (e) {
    // do nothing
    }

    try {
        await asyncExec('npm run db:create');
    } catch (e) {
    // do nothing
    }

    await asyncExec('npm run db:migrate:up');
};
