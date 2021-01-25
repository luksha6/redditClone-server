import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core"
import path from 'path';
import { User } from "./entities/User";

console.log("dirname: ", __dirname);
export default {
    migrations: {
        path: path.join(__dirname, './migrations'),
        pattern: /^[\w-]+\d+\.[tj]s$/,  
    }, 
    user: 'postgres',
    password: 'postgres',
    entities: [Post, User],
    dbName: 'lireddit',
    debug: !__prod__,
    type: 'postgresql'
} as Parameters<typeof MikroORM.init>[0];
