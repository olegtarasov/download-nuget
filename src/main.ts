import * as core from '@actions/core';
import * as tc from '@actions/tool-cache';
import * as path from 'path';
import * as fs from 'fs';

async function run() {
  try {
    const nugetExe = await tc.downloadTool("https://dist.nuget.org/win-x86-commandline/latest/nuget.exe");
    const dir = path.dirname(nugetExe);
    const newPath = path.join(dir, "nuget.exe");
    
    fs.renameSync(nugetExe, newPath);

    console.log(`Saved NuGet.exe to ${newPath}`);
    
    await core.addPath(dir);
    await core.exportVariable("NUGET_EXE", newPath);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
