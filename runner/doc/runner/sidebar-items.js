initSidebarItems({"enum":[["FormatMode",""],["Target",""]],"fn":[["build_example_config",""],["build_server",""],["build_wasm_module",""],["example_toml_files",""],["format",""],["is_bazel_file","Return whether the provided path refers to a Bazel file (`BUILD`, `WORKSPACE`, or `*.bzl`)"],["is_cargo_toml_file","Return whether the provided path refers to a `Cargo.toml` file. Note that it does not differentiate between workspace-level and crate-level files."],["is_cargo_workspace_file","Return whether the provided path refers to a workspace-level `Cargo.toml` file, by looking at the contents of the file."],["is_example_toml_file",""],["is_ignored_entry",""],["is_ignored_path","Return whether to ignore the specified path. This is used by the `walker` package to efficiently avoid descending into blacklisted directories."],["is_markdown_file","Return whether the provided path refers to a markdown file (`*.md`)"],["main",""],["read_file",""],["run_bazel_build",""],["run_bazel_test",""],["run_buildifier",""],["run_cargo_clippy",""],["run_cargo_fmt",""],["run_cargo_test",""],["run_ci",""],["run_client",""],["run_embedmd",""],["run_example",""],["run_example_server",""],["run_examples",""],["run_liche",""],["run_markdownlint",""],["run_prettier",""],["run_tests",""],["source_files","Return an iterator of all the first-party and non-ignored files in the repository, which can be then additionally filtered by the caller."],["to_string",""],["workspace_manifest_files","Return an iterator of all known Cargo Manifest files that define workspaces."]],"macro":[["spread","Similar to the `vec!` macro, but also allows a \"spread\" operator syntax (`...`) to inline and expand nested iterable values."]],"mod":[["internal",""]],"struct":[["Client",""],["Example",""]]});