/**
 * The name of folder where the message is stored.
 */
export declare enum MessageFolder {
    /**
     * The inbox is loaded quickly from memory, but messages regularly move to the archive.
     */
    inbox = "inbox",
    /**
     * The archive contains all previous messages, but must be queried from disk for retrieval.
     */
    archive = "archive"
}
//# sourceMappingURL=MessageFolder.d.ts.map