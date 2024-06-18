List here all our content "collections".

A collection matches the DecapCMS term: it can be a folder collection (we have "content pages"), or a file collection (we have a home page, following a specific, unique template).

For a new content type, create a new file matching the collection name in `./collections` and export a `Collection` object. To help you build this object, you can use the `createCollection` function, following how its already used in existing content types.

A collection has a `config` (DecapCMS schema), an `entryParser` (function taking raw entry content and returning parsed content, like markdown converted to html), an `EntryPreview` (react component ready to be used as preview template by DecapCMS) and a `getEntry` helper (function to easily retrieve a given entry content).
