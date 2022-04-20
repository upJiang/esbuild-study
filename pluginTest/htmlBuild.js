const { build } = require("esbuild");
const html = require("../plugin/html-plugin");
async function runBuild() {
  build({
    absWorkingDir: process.cwd(),
    entryPoints: ["./pluginTest/httpPlugin.jsx"],
    outdir: "dist",
    bundle: true,
    format: "esm",
    splitting: true,
    sourcemap: true,
    metafile: true,
    plugins: [html()],
  }).then(() => {
    console.log("🚀 Build Finished!");
  }).catch((error)=>{
    console.log("error",error);
  })
}

runBuild();