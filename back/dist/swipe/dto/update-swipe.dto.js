"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSwipeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_swipe_dto_1 = require("./create-swipe.dto");
class UpdateSwipeDto extends (0, mapped_types_1.PartialType)(create_swipe_dto_1.CreateSwipeDto) {
}
exports.UpdateSwipeDto = UpdateSwipeDto;
//# sourceMappingURL=update-swipe.dto.js.map