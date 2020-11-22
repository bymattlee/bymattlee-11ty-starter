/* ***** ----------------------------------------------- ***** **
/* ***** Main JS
/* ***** ----------------------------------------------- ***** */

import { init as globalInit } from './modules/global.js';
import { init as highwayInit } from './modules/highway.js';
import { init as s2rInit } from './modules/s2r.js';

globalInit();
highwayInit();
s2rInit();
