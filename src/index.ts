import promiseLazyEach from '@ryefimchuk/promise-lazy-each';

export default function promiseEach(promiseFactories: Array<() => Promise<any>>): Promise<void> {
    return promiseLazyEach(promiseFactories, (promiseFactory: () => Promise<any>): Promise<any> => promiseFactory());
}