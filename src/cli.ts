// @ts-ignore
import '../.scripts/postinstall.cjs';
import { createVault } from "./wallet.ts";

const help = process.argv.includes("--help");
if (help) {
  console.error("viem-local-account — ETH wallet");
  process.exit(0);
}
const name = process.argv[2] ?? "default";
const vault = createVault(name, "demo");
console.log(vault.id, vault.accounts[0].address);
