import 'server-only'
import { sql } from '@vercel/postgres';

export const getProject = async (id: string) => {
    try {
        const result = await sql`SELECT * FROM projects WHERE id = '${id}'`;
        return result.rows[0];
    } catch (error: any) {
        return {};
    }
};