declare module 'assert' {
    /** An alias of `assert.ok()`. */
    function assert(value: unknown, message?: string | Error): asserts value;
    namespace assert {
        class AssertionError extends Error {
            actual: unknown;
            expected: unknown;
            operator: string;
            generatedMessage: boolean;
            code: 'ERR_ASSERTION';

            constructor(options?: {
                /** If provided, the error message is set to this value. */
                message?: string | undefined;
                /** The `actual` property on the error instance. */
                actual?: unknown | undefined;
                /** The `expected` property on the error instance. */
                expected?: unknown | undefined;
                /** The `operator` property on the error instance. */
                operator?: string | undefined;
                /** If provided, the generated stack trace omits frames before this function. */
                // tslint:disable-next-line:ban-types
                stackStartFn?: Function | undefined;
            });
        }

        class CallTracker {
            calls(exact?: number): () => void;
            calls<Func extends (...args: any[]) => any>(fn?: Func, exact?: number): Func;
            report(): CallTrackerReportInformation[];
            verify(): void;
        }
        interface CallTrackerReportInformation {
            message: string;
            /** The actual number of times the function was called. */
            actual: number;
            /** The number of times the function was expected to be called. */
            expected: number;
            /** The name of the function that is wrapped. */
            operator: string;
            /** A stack trace of the function. */
            stack: object;
        }

        type AssertPredicate = RegExp | (new () => object) | ((thrown: unknown) => boolean) | object | Error;

        function fail(message?: string | Error): never;
        /** @deprecated since v10.0.0 - use fail([message]) or other assert functions instead. */
        function fail(
            actual: unknown,
            expected: unknown,
            message?: string | Error,
            operator?: string,
            // tslint:disable-next-line:ban-types
            stackStartFn?: Function,
        ): never;
        function ok(value: unknown, message?: string | Error): asserts value;
        /** @deprecated since v9.9.0 - use strictEqual() instead. */
        function equal(actual: unknown, expected: unknown, message?: string | Error): void;
        /** @deprecated since v9.9.0 - use notStrictEqual() instead. */
        function notEqual(actual: unknown, expected: unknown, message?: string | Error): void;
        /** @deprecated since v9.9.0 - use deepStrictEqual() instead. */
        function deepEqual(actual: unknown, expected: unknown, message?: string | Error): void;
        /** @deprecated since v9.9.0 - use notDeepStrictEqual() instead. */
        function notDeepEqual(actual: unknown, expected: unknown, message?: string | Error): void;
        function strictEqual<T>(actual: unknown, expected: T, message?: string | Error): asserts actual is T;
        function notStrictEqual(actual: unknown, expected: unknown, message?: string | Error): void;
        function deepStrictEqual<T>(actual: unknown, expected: T, message?: string | Error): asserts actual is T;
        function notDeepStrictEqual(actual: unknown, expected: unknown, message?: string | Error): void;

        function throws(block: () => unknown, message?: string | Error): void;
        function throws(block: () => unknown, error: AssertPredicate, message?: string | Error): void;
        function doesNotThrow(block: () => unknown, message?: string | Error): void;
        function doesNotThrow(block: () => unknown, error: AssertPredicate, message?: string | Error): void;

        function ifError(value: unknown): asserts value is null | undefined;

        function rejects(block: (() => Promise<unknown>) | Promise<unknown>, message?: string | Error): Promise<void>;
        function rejects(
            block: (() => Promise<unknown>) | Promise<unknown>,
            error: AssertPredicate,
            message?: string | Error,
        ): Promise<void>;
        function doesNotReject(block: (() => Promise<unknown>) | Promise<unknown>, message?: string | Error): Promise<void>;
        function doesNotReject(
            block: (() => Promise<unknown>) | Promise<unknown>,
            error: AssertPredicate,
            message?: string | Error,
        ): Promise<void>;

        function match(value: string, regExp: RegExp, message?: string | Error): void;
        function doesNotMatch(value: string, regExp: RegExp, message?: string | Error): void;

        const strict: Omit<
            typeof assert,
            | 'equal'
            | 'notEqual'
            | 'deepEqual'
            | 'notDeepEqual'
            | 'ok'
            | 'strictEqual'
            | 'deepStrictEqual'
            | 'ifError'
            | 'strict'
        > & {
            (value: unknown, message?: string | Error): asserts value;
            equal: typeof strictEqual;
            notEqual: typeof notStrictEqual;
            deepEqual: typeof deepStrictEqual;
            notDeepEqual: typeof notDeepStrictEqual;

            // Mapped types and assertion functions are incompatible?
            // TS2775: Assertions require every name in the call target
            // to be declared with an explicit type annotation.
            ok: typeof ok;
            strictEqual: typeof strictEqual;
            deepStrictEqual: typeof deepStrictEqual;
            ifError: typeof ifError;
            strict: typeof strict;
        };
    }

    export = assert;
}

declare module 'node:assert' {
    import assert = require('assert');
    export = assert;
}
