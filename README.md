# Download NuGet

Cross-platform action that downloads the latest NuGet.exe and adds it to PATH. You can use the executable on Linux and MacOs through `mono`.

## Usage

```yaml
    steps:
      - uses: olegtarasov/download-nuget@v1

      - name: Make Nuget package (Non-Windows)
        run: mono nuget.exe pack foobar.nuspec
    
      - name: Make Nuget package (Windows)
        run: nuget pack foobar.nuspec
```

See the walkthrough located [here](https://github.com/actions/toolkit/blob/master/docs/javascript-action.md).

In addition to walking your through how to create an action, it also provides strategies for versioning, releasing and referencing your actions.
