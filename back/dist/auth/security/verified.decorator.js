"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Verified = void 0;
const common_1 = require("@nestjs/common");
const Verified = (verified = true) => (0, common_1.SetMetadata)('verified', verified);
exports.Verified = Verified;
//# sourceMappingURL=verified.decorator.js.map