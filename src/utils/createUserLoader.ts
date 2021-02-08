// @ts-ignore
import DataLoader from 'dataloader';
import { User } from '../entities/User';

// [1, 12, 33, 4]
// [{id: 1, username: 'luka'}, {id: 12, username: 'test'}, {}, {}]
// @ts-ignore
export const createUserLoader = () => new DataLoader<number, User>(async userIds => {
    const users = await User.findByIds(userIds as number[]);
    const userIdToUser: Record<number, User> = {};
    users.forEach(u => {
        userIdToUser[u.id] = u;
    });
// @ts-ignore
    return userIds.map((userId) => userIdToUser[userId])
});