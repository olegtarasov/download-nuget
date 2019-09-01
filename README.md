# Download NuGet

Cross-platform action that downloads the latest NuGet.exe and adds it to PATH. You can use the executable on Linux and MacOs through `mono` and `NUGET_EXE` environment variable.

## Usage

```yaml
    steps:
      - uses: olegtarasov/download-nuget@v1

      - name: Make Nuget package (Non-Windows)
        run: mono $NUGET_EXE pack foobar.nuspec
    
      - name: Make Nuget package (Windows)
        run: nuget pack foobar.nuspec
```