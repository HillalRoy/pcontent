export = webpack;
declare function webpack(options: any, callback: any): any;
declare namespace webpack {
    const AutomaticPrefetchPlugin: any;
    const BannerPlugin: any;
    const CachePlugin: any;
    class Compiler {
        static addCompatLayer(instance: any): void;
        constructor(context: any);
        hooks: any;
        name: any;
        parentCompilation: any;
        outputPath: any;
        outputFileSystem: any;
        inputFileSystem: any;
        recordsInputPath: any;
        recordsOutputPath: any;
        records: any;
        removedFiles: any;
        fileTimestamps: any;
        contextTimestamps: any;
        resolverFactory: any;
        resolvers: any;
        options: any;
        context: any;
        requestShortener: any;
        running: any;
        watchMode: any;
        apply(args: any): any;
        compile(callback: any): void;
        createChildCompiler(compilation: any, compilerName: any, compilerIndex: any, outputOptions: any, plugins: any): any;
        createCompilation(): any;
        createContextModuleFactory(): any;
        createNormalModuleFactory(): any;
        emitAssets(compilation: any, callback: any): void;
        emitRecords(callback: any): any;
        isChild(): any;
        newCompilation(params: any): any;
        newCompilationParams(): any;
        plugin(args: any): any;
        purgeInputFileSystem(): void;
        readRecords(callback: any): any;
        run(callback: any): any;
        runAsChild(callback: any): void;
        watch(watchOptions: any, handler: any): any;
    }
    const ContextExclusionPlugin: any;
    const ContextReplacementPlugin: any;
    const DefinePlugin: any;
    const Dependency: any;
    const DllPlugin: any;
    const DllReferencePlugin: any;
    const EnvironmentPlugin: any;
    const EvalDevToolModulePlugin: any;
    const EvalSourceMapDevToolPlugin: any;
    const ExtendedAPIPlugin: any;
    const ExternalsPlugin: any;
    const HashedModuleIdsPlugin: any;
    const HotModuleReplacementPlugin: any;
    const IgnorePlugin: any;
    const LibraryTemplatePlugin: any;
    const LoaderOptionsPlugin: any;
    const LoaderTargetPlugin: any;
    const MemoryOutputFileSystem: any;
    const Module: any;
    const ModuleFilenameHelpers: any;
    class MultiCompiler {
        static addCompatLayer(instance: any): void;
        constructor(compilers: any);
        hooks: any;
        compilers: any;
        running: any;
        apply(args: any): any;
        plugin(args: any): any;
        purgeInputFileSystem(): void;
        run(callback: any): any;
        runWithDependencies(compilers: any, fn: any, callback: any): void;
        validateDependencies(callback: any): any;
        watch(watchOptions: any, handler: any): any;
    }
    const NamedChunksPlugin: any;
    const NamedModulesPlugin: any;
    const NoEmitOnErrorsPlugin: any;
    class NodeEnvironmentPlugin {
        apply(compiler: any): void;
    }
    const NormalModuleReplacementPlugin: any;
    const PrefetchPlugin: any;
    const ProgressPlugin: any;
    const ProvidePlugin: any;
    const SetVarMainTemplatePlugin: any;
    const SingleEntryPlugin: any;
    const SourceMapDevToolPlugin: any;
    const Stats: any;
    const Template: any;
    const UmdMainTemplatePlugin: any;
    const WatchIgnorePlugin: any;
    class WebpackOptionsApply {
        process(options: any, compiler: any): any;
    }
    class WebpackOptionsDefaulter {
        process(options: any): any;
        set(name: any, config: any, def: any): void;
    }
    class WebpackOptionsValidationError {
        static captureStackTrace(p0: any, p1: any): any;
        static formatSchema(schema: any, prevSchemas: any): any;
        static formatValidationError(err: any): any;
        static stackTraceLimit: number;
        constructor(validationErrors: any);
        name: any;
        validationErrors: any;
    }
    const debug: {
        ProfilingPlugin: any;
    };
    const dependencies: {
        DependencyReference: any;
    };
    const node: {
        NodeTemplatePlugin: any;
        ReadFileCompileWasmTemplatePlugin: any;
    };
    const optimize: {
        AggressiveMergingPlugin: any;
        AggressiveSplittingPlugin: any;
        ChunkModuleIdRangePlugin: any;
        CommonsChunkPlugin: any;
        LimitChunkCountPlugin: any;
        MinChunkSizePlugin: any;
        ModuleConcatenationPlugin: any;
        OccurrenceChunkOrderPlugin: any;
        OccurrenceModuleOrderPlugin: any;
        OccurrenceOrderPlugin: any;
        RuntimeChunkPlugin: any;
        SideEffectsFlagPlugin: any;
        SplitChunksPlugin: any;
        UglifyJsPlugin: any;
    };
    const util: {
        createHash: any;
    };
    function validate(p0: any): any;
    function validateSchema(schema: any, options: any): any;
    const version: string;
    const web: {
        FetchCompileWasmTemplatePlugin: any;
        JsonpTemplatePlugin: any;
    };
    const webworker: {
        WebWorkerTemplatePlugin: any;
    };
}
