import { browserName,getMessage,productData } from "./47_ModuleExport.js";

import * as data from "./47_ModuleExport.js"

console.log(data.browserName);

data.getMessage();

let p1 =new data.productData(111,"iphone")
p1.getData();