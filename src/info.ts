import { Timer, Unit, Quest } from "w3ts/index";
import { Players } from "w3ts/globals";
import { addScriptHook, W3TS_HOOK } from "w3ts/hooks";

const BUILD_DATE = compiletime(() => new Date().toUTCString());
const TS_VERSION = compiletime(() => require('typescript').version);
const TSTL_VERSION = compiletime(() => require('typescript-to-lua').version);

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  const info = new Quest();
  info.required = false;
  info.enabled = true;
  info.setIcon('ReplaceableTextures\\CommandButtons\\BTNDrum.blp');
  info.setTitle('Build Info');
  info.addItem(`Build: ${BUILD_DATE}`);
  info.addItem(`Typescript: v${TS_VERSION}`);
  info.addItem(`Transpiler: v${TSTL_VERSION}`);
  info.setDescription(`Map by Zed#9133`);

  print("Welcome to TypeScript!");

  const unit = new Unit(Players[0], FourCC("hfoo"), 0, 0);
  unit.name = "TypeScript";

  new Timer().start(1.00, true, () => {
    unit.color = Players[math.random(0, bj_MAX_PLAYERS)].color
  });
});